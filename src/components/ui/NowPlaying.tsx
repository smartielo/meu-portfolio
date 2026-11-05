"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FiExternalLink, FiMusic } from "react-icons/fi";

interface NowPlayingData {
  configured: boolean;
  isPlaying: boolean;
  reason?: "missing_env" | "invalid_refresh_token" | "token_request_failed" | "playback_request_failed";
  title?: string;
  artist?: string;
  songUrl?: string;
  albumName?: string;
  albumImageUrl?: string;
  progressMs?: number;
  durationMs?: number;
  contentType?: "track" | "episode";
}

function formatTime(milliseconds: number) {
  const seconds = Math.max(0, Math.floor(milliseconds / 1000));
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}

export function NowPlaying() {
  const [data, setData] = useState<NowPlayingData | null>(null);
  const [positionMs, setPositionMs] = useState(0);

  useEffect(() => {
    let mounted = true;

    async function fetchNowPlaying() {
      if (document.visibilityState === "hidden") return;
      try {
        const response = await fetch("/api/now-playing", { cache: "no-store" });
        if (!response.ok) throw new Error(`Spotify API returned ${response.status}`);
        const json = (await response.json()) as NowPlayingData;
        if (mounted) {
          setData(json);
          setPositionMs(json.progressMs ?? 0);
        }
      } catch {
        if (mounted) setData({ configured: false, isPlaying: false });
      }
    }

    const initialRequest = window.setTimeout(fetchNowPlaying, 900);
    const interval = window.setInterval(fetchNowPlaying, 60000);
    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") fetchNowPlaying();
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      mounted = false;
      window.clearTimeout(initialRequest);
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (!data?.isPlaying || !data.durationMs) return;
    const progressTimer = window.setInterval(() => {
      setPositionMs((current) => Math.min(current + 1000, data.durationMs ?? current));
    }, 1000);
    return () => window.clearInterval(progressTimer);
  }, [data?.durationMs, data?.isPlaying]);

  const isPlaying = Boolean(data?.isPlaying && data.title);
  const duration = data?.durationMs ?? 0;
  const progress = duration > 0 ? Math.min((positionMs / duration) * 100, 100) : 0;

  let status = "Conectando ao Spotify...";
  if (data && !data.configured) status = "Spotify indisponível neste ambiente.";
  else if (data?.reason === "invalid_refresh_token") status = "Spotify precisa ser reconectado.";
  else if (data?.reason) status = "Spotify temporariamente indisponível.";
  else if (data && !data.isPlaying) status = "Nada tocando no momento.";

  return (
    <div className="group relative flex min-h-[168px] overflow-hidden rounded-2xl border border-white/8 bg-white/[0.035] p-4 backdrop-blur sm:p-5">
      <div className="pointer-events-none absolute -right-12 -top-16 h-40 w-40 rounded-full bg-phosphor-amber/10 blur-3xl transition-colors group-hover:bg-phosphor-green/15" />

      <div className="relative z-10 flex w-full min-w-0 flex-col justify-center gap-4">
        <div className="flex min-w-0 items-center gap-4 sm:gap-5">
          <div className="relative h-[5.25rem] w-[5.25rem] shrink-0 sm:h-24 sm:w-24">
            <div
              className={`absolute inset-0 rounded-full border border-white/10 bg-[repeating-radial-gradient(circle_at_center,#0b0d14_0,#0b0d14_3px,#171b28_4px,#0b0d14_7px)] shadow-[0_14px_35px_rgba(0,0,0,.35)] ${isPlaying ? "vinyl-spinning" : ""}`}
            >
              <div className="absolute inset-[15px] overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-phosphor-green to-phosphor-amber sm:inset-[17px]">
                {data?.albumImageUrl ? (
                  <Image src={data.albumImageUrl} alt="" fill sizes="(max-width: 639px) 54px, 62px" quality={75} className="object-cover" />
                ) : (
                  <FiMusic className="absolute inset-0 m-auto text-sm text-white" />
                )}
              </div>
              <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-background" />
            </div>
            {isPlaying && <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.8)]" />}
          </div>

          <div className="min-w-0 flex-1">
            <div className="mb-2 flex items-center gap-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-phosphor-amber">
                {isPlaying ? "Ouvindo agora" : "Spotify"}
              </p>
              {isPlaying && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />}
            </div>

            {isPlaying ? (
              <a href={data?.songUrl} target="_blank" rel="noopener noreferrer" className="group/link block min-w-0">
                <span className="flex min-w-0 items-start gap-2">
                  <strong className="line-clamp-2 min-w-0 text-sm font-semibold leading-snug text-white transition-colors group-hover/link:text-phosphor-green sm:text-base">{data?.title}</strong>
                  <FiExternalLink className="shrink-0 text-xs text-foreground/25 transition-colors group-hover/link:text-phosphor-green" />
                </span>
                <span className="mt-0.5 block truncate text-xs text-foreground/50">{data?.artist}</span>
              </a>
            ) : (
              <p className="text-sm text-foreground/45">{status}</p>
            )}

          </div>

          <div className={`hidden h-10 items-end gap-1 xl:flex ${isPlaying ? "" : "equalizer-paused"}`} aria-hidden>
            {[0, 1, 2, 3, 4].map((bar) => (
              <span
                key={bar}
                className="equalizer-bar h-full w-1 rounded-full bg-gradient-to-t from-phosphor-green to-phosphor-amber"
                style={{ animationDelay: `${bar * -0.13}s`, animationDuration: `${0.68 + bar * 0.09}s` }}
              />
            ))}
          </div>
        </div>

        <div className="flex w-full min-w-0 items-center gap-2.5">
          <span className="w-8 shrink-0 text-[9px] tabular-nums text-foreground/30">{formatTime(positionMs)}</span>
          <div className="h-1 min-w-0 flex-1 overflow-hidden rounded-full bg-white/8">
            <div className="h-full rounded-full bg-gradient-to-r from-phosphor-green to-phosphor-amber transition-[width] duration-1000 ease-linear" style={{ width: `${progress}%` }} />
          </div>
          <span className="w-8 shrink-0 text-right text-[9px] tabular-nums text-foreground/30">{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
}
