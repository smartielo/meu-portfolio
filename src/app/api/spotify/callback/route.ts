// src/app/api/spotify/callback/route.ts
import { NextRequest, NextResponse } from "next/server";
import { SPOTIFY_REDIRECT_URI } from "@/lib/spotify";

function htmlPage(body: string) {
  return new NextResponse(
    `<html><body style="font-family: monospace; background:#05070a; color:#00ff9d; padding: 40px; line-height: 1.6;">${body}</body></html>`,
    { headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const error = request.nextUrl.searchParams.get("error");
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (error) return htmlPage(`<h1>Erro do Spotify</h1><p>${error}</p>`);
  if (!code) return htmlPage("<h1>Nenhum código recebido.</h1>");
  if (!clientId || !clientSecret) {
    return htmlPage("<h1>SPOTIFY_CLIENT_ID / SPOTIFY_CLIENT_SECRET não configurados no .env.local.</h1>");
  }

  const redirectUri = SPOTIFY_REDIRECT_URI;
  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${basic}`,
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: redirectUri,
    }),
  });

  const data = await tokenRes.json();

  if (!tokenRes.ok) {
    return htmlPage(`<h1>Erro ao trocar código por token</h1><pre>${JSON.stringify(data, null, 2)}</pre>`);
  }

  return htmlPage(`
    <h1>Refresh token gerado ✔</h1>
    <p>Copie o valor abaixo para <b>SPOTIFY_REFRESH_TOKEN</b> no seu <code>.env.local</code>, salve e reinicie o <code>npm run dev</code>.</p>
    <pre style="background:#0b0f12; border:1px solid #00ff9d33; padding:16px; word-break:break-all;">${data.refresh_token}</pre>
    <p style="color:#ffb000;">Esse token é secreto — não cole ele em nenhum lugar público (chat, repositório, print).</p>
  `);
}
