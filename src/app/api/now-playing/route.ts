import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type SpotifyFailureReason =
  | "missing_env"
  | "invalid_refresh_token"
  | "token_request_failed"
  | "playback_request_failed";

interface SpotifyItem {
  name: string;
  type?: "track" | "episode";
  duration_ms?: number;
  artists?: { name: string }[];
  album?: { name: string; images: { url: string }[] };
  images?: { url: string }[];
  show?: { name: string; images?: { url: string }[] };
  external_urls?: { spotify?: string };
}

interface SpotifyCurrentlyPlayingResponse {
  is_playing: boolean;
  progress_ms?: number;
  item: SpotifyItem | null;
}

interface SpotifyTokenResponse {
  access_token?: string;
  expires_in?: number;
  error?: string;
}

let cachedAccessToken: { token: string; expiresAt: number } | null = null;

function failure(reason: SpotifyFailureReason, configured: boolean, status?: number) {
  return NextResponse.json(
    { configured, isPlaying: false, reason },
    { status: status ?? 200, headers: { "Cache-Control": "no-store" } },
  );
}

async function getAccessToken(): Promise<
  | { ok: true; token: string }
  | { ok: false; reason: SpotifyFailureReason }
> {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    return { ok: false, reason: "missing_env" };
  }

  if (cachedAccessToken && cachedAccessToken.expiresAt > Date.now()) {
    return { ok: true, token: cachedAccessToken.token };
  }

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${basic}`,
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
    cache: "no-store",
  });

  const data = (await response.json().catch(() => ({}))) as SpotifyTokenResponse;

  if (!response.ok || !data.access_token) {
    const reason = data.error === "invalid_grant" ? "invalid_refresh_token" : "token_request_failed";
    console.error(`[spotify] token refresh failed: ${reason} (${response.status})`);
    return { ok: false, reason };
  }

  cachedAccessToken = {
    token: data.access_token,
    expiresAt: Date.now() + Math.max((data.expires_in ?? 3600) - 60, 60) * 1000,
  };

  return { ok: true, token: data.access_token };
}

async function requestCurrentPlayback(token: string) {
  return fetch("https://api.spotify.com/v1/me/player/currently-playing?additional_types=track,episode", {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
}

export async function GET() {
  let tokenResult = await getAccessToken();

  if (!tokenResult.ok) {
    return failure(tokenResult.reason, tokenResult.reason !== "missing_env");
  }

  let response = await requestCurrentPlayback(tokenResult.token);

  if (response.status === 401) {
    cachedAccessToken = null;
    tokenResult = await getAccessToken();
    if (!tokenResult.ok) return failure(tokenResult.reason, true);
    response = await requestCurrentPlayback(tokenResult.token);
  }

  if (response.status === 204) {
    return NextResponse.json(
      { configured: true, isPlaying: false },
      { headers: { "Cache-Control": "no-store" } },
    );
  }

  if (!response.ok) {
    console.error(`[spotify] playback request failed (${response.status})`);
    return failure("playback_request_failed", true);
  }

  const playback = (await response.json()) as SpotifyCurrentlyPlayingResponse;
  if (!playback.item) {
    return NextResponse.json(
      { configured: true, isPlaying: false },
      { headers: { "Cache-Control": "no-store" } },
    );
  }

  const artist = playback.item.artists?.map(({ name }) => name).join(", ")
    || playback.item.show?.name
    || "Spotify";
  const images = playback.item.album?.images
    || playback.item.images
    || playback.item.show?.images
    || [];

  return NextResponse.json(
    {
      configured: true,
      isPlaying: playback.is_playing,
      title: playback.item.name,
      artist,
      songUrl: playback.item.external_urls?.spotify,
      contentType: playback.item.type ?? "track",
      albumName: playback.item.album?.name || playback.item.show?.name,
      albumImageUrl: images[1]?.url || images[0]?.url,
      progressMs: playback.progress_ms ?? 0,
      durationMs: playback.item.duration_ms ?? 0,
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}
