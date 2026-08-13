// src/components/ui/NowPlaying.tsx
"use client";

import { useEffect, useState } from "react";

interface NowPlayingData {
  configured: boolean;
  isPlaying: boolean;
  title?: string;
  artist?: string;
  songUrl?: string;
}

export function NowPlaying() {
  const [data, setData] = useState<NowPlayingData | null>(null);

  useEffect(() => {
    let mounted = true;

    async function fetchNowPlaying() {
      try {
        const res = await fetch("/api/now-playing");
        const json = await res.json();
        if (mounted) setData(json);
      } catch {
        if (mounted) setData({ configured: false, isPlaying: false });
      }
    }

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 30000);
    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex h-full flex-col justify-center border border-phosphor-green/10 bg-black/30 p-4 font-mono text-sm">
      <p className="mb-2 text-xs uppercase tracking-widest text-phosphor-amber">now_playing</p>

      {!data ? (
        <p className="text-foreground/40">{"> "}carregando...</p>
      ) : !data.configured ? (
        <p className="text-foreground/40">{"> "}aguardando credenciais do spotify...</p>
      ) : data.isPlaying && data.title ? (
        <a
          href={data.songUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-phosphor-green transition-colors hover:text-phosphor-amber"
        >
          <span className="animate-pulse">♪</span>
          <span className="truncate">
            {data.title} — {data.artist}
          </span>
        </a>
      ) : (
        <p className="text-foreground/40">{"> "}nada tocando agora</p>
      )}
    </div>
  );
}
