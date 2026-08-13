// src/components/sections/Hero.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profileData } from "@/data/profile";
import { HudGridBackground } from "@/components/ui/HudGridBackground";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { NeofetchCard } from "@/components/ui/NeofetchCard";
import { NowPlaying } from "@/components/ui/NowPlaying";
import { CinematicSection } from "@/components/layouts/CinematicSection";

const BOOT_LINES = [
  "initializing portfolio.exe",
  "loading profile: gabriel martielo",
  "mounting sections... [ok]",
  "welcome.",
];

function BootSequence({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || sessionStorage.getItem("boot-seen")) {
      onDone();
      return;
    }
    setVisible(true);
    sessionStorage.setItem("boot-seen", "1");
    const t = setTimeout(onDone, 2600);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      exit={{ opacity: 0 }}
      onClick={onDone}
      className="fixed inset-0 z-[300] flex cursor-pointer flex-col justify-center bg-background px-8 font-mono text-sm text-phosphor-green"
    >
      {BOOT_LINES.map((line, i) => (
        <motion.p
          key={line}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.35 }}
        >
          {"> "}
          {line}
        </motion.p>
      ))}
      <button
        onClick={onDone}
        className="absolute bottom-8 right-8 text-xs text-phosphor-green/40 hover:text-phosphor-amber"
      >
        [ skip ]
      </button>
    </motion.div>
  );
}

export function Hero() {
  const [booted, setBooted] = useState(false);

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { delay: 0.3, staggerChildren: 0.06 },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <CinematicSection
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-background pt-24"
    >
      <AnimatePresence>{!booted && <BootSequence onDone={() => setBooted(true)} />}</AnimatePresence>

      <HudGridBackground />

      <div className="container relative z-10 mx-auto px-6">
        <TerminalWindow path="~/gabriel" title="whoami" className="mx-auto max-w-3xl">
          {profileData.achievements?.some((a) => a.featured) && (
            <a
              href="#achievements"
              className="mb-4 inline-block border border-phosphor-amber/40 bg-phosphor-amber/10 px-3 py-1 font-mono text-xs text-phosphor-amber transition-colors hover:bg-phosphor-amber/20"
            >
              [ badge: google student ambassador ]
            </a>
          )}

          <p className="font-mono text-phosphor-green/60">{"> "}whoami</p>

          <motion.h1
            variants={sentence}
            initial="hidden"
            animate={booted ? "visible" : "hidden"}
            className="mb-4 font-mono text-4xl font-bold text-phosphor-green md:text-6xl"
          >
            {profileData.name.split("").map((char, index) => (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <p className="mb-4 font-mono text-phosphor-amber">{profileData.role}</p>

          <p className="mb-8 max-w-2xl text-foreground/80 leading-relaxed">{profileData.headline}</p>

          <div className="flex flex-wrap gap-4 font-mono text-sm">
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-phosphor-green transition-colors hover:text-phosphor-amber"
            >
              [ open linkedin ]
            </a>
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-phosphor-green transition-colors hover:text-phosphor-amber"
            >
              [ open github ]
            </a>
          </div>

          <div className="mt-8 grid gap-3 border-t border-phosphor-green/10 pt-8 sm:grid-cols-2">
            <NeofetchCard />
            <NowPlaying />
          </div>
        </TerminalWindow>
      </div>
    </CinematicSection>
  );
}
