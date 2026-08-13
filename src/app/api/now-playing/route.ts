// src/app/api/now-playing/route.ts
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

interface SpotifyTrackItem {
  name: string;
  artists: { name: string }[];
  album: { name: string; images: { url: string }[] };
  external_urls: { spotify: string };
}

interface SpotifyCurrentlyPlayingResponse {
  is_playing: boolean;
  item: SpotifyTrackItem | null;
}

async function getAccessToken(): Promise<string | null> {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) return null;

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const res = await fetch("https://accounts.spotify.com/api/token", {
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

  if (!res.ok) return null;
  const data = await res.json();
  return data.access_token as string;
}

export async function GET() {
  const accessToken = await getAccessToken();

  if (!accessToken) {
    return NextResponse.json({ configured: false, isPlaying: false });
  }

  const res = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: { Authorization: `Bearer ${accessToken}` },
    cache: "no-store",
  });

  if (res.status === 204 || !res.ok) {
    return NextResponse.json({ configured: true, isPlaying: false });
  }

  const song: SpotifyCurrentlyPlayingResponse = await res.json();

  if (!song?.item) {
    return NextResponse.json({ configured: true, isPlaying: false });
  }

  return NextResponse.json({
    configured: true,
    isPlaying: song.is_playing,
    title: song.item.name,
    artist: song.item.artists.map((a) => a.name).join(", "),
    songUrl: song.item.external_urls.spotify,
  });
}
