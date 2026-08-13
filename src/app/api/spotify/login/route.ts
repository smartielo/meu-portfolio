// src/app/api/spotify/login/route.ts
import { NextResponse } from "next/server";
import { SPOTIFY_REDIRECT_URI } from "@/lib/spotify";

export async function GET() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;

  if (!clientId) {
    return new NextResponse(
      "SPOTIFY_CLIENT_ID não configurado no .env.local. Crie um app em developer.spotify.com/dashboard e adicione SPOTIFY_CLIENT_ID + SPOTIFY_CLIENT_SECRET antes de acessar esta rota.",
      { status: 500 }
    );
  }

  const redirectUri = SPOTIFY_REDIRECT_URI;
  const params = new URLSearchParams({
    response_type: "code",
    client_id: clientId,
    scope: "user-read-currently-playing user-read-playback-state",
    redirect_uri: redirectUri,
  });

  return NextResponse.redirect(`https://accounts.spotify.com/authorize?${params.toString()}`);
}
