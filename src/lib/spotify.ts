// src/lib/spotify.ts
// Precisa ser EXATAMENTE igual ao Redirect URI cadastrado no app do Spotify Dashboard.
// Fixo (em vez de derivado da request) porque o host da requisição pode não bater
// caractere-por-caractere com o que está cadastrado (ex: localhost vs 127.0.0.1).
export const SPOTIFY_REDIRECT_URI =
  process.env.SPOTIFY_REDIRECT_URI || "http://127.0.0.1:3000/api/spotify/callback";
