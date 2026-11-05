"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { DownloadResume } from "@/components/ui/DownloadResume";
import { useCommandPalette } from "@/components/providers/CommandPaletteProvider";

export function Navbar() {
  const pathname = usePathname();
  const { setOpen } = useCommandPalette();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/links") {
    return null;
  }

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b transition-all ${
        scrolled
          ? "border-white/8 bg-background/75 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById("hero");
            if (!el) return;
            el.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex min-w-0 items-center gap-2 text-sm font-semibold text-white sm:gap-3"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-phosphor-green to-phosphor-amber text-xs text-background">GM</span>
          <span className="hidden sm:inline">Gabriel Martielo</span>
          <span className="sm:hidden">Gabriel</span>
        </a>

        <div className="flex shrink-0 items-center gap-2 text-xs sm:gap-3">
          <button
            onClick={() => setOpen(true)}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-foreground/75 transition-all hover:border-phosphor-green/40 hover:bg-white/10 hover:text-white"
          >
            Menu
          </button>
          <DownloadResume />
        </div>
      </div>
    </nav>
  );
}
