"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { DownloadResume } from "@/components/ui/DownloadResume";
import { useCommandPalette } from "@/components/providers/CommandPaletteProvider";
import { useLenis } from "@/components/providers/LenisProvider";

export function Navbar() {
  const pathname = usePathname();
  const { setOpen } = useCommandPalette();
  const lenis = useLenis();
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
      className={`fixed top-0 z-50 w-full border-b font-mono transition-colors ${
        scrolled
          ? "border-phosphor-green/15 bg-background/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById("hero");
            if (!el) return;
            if (lenis) lenis.scrollTo(el);
            else el.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-sm text-phosphor-green"
        >
          gabriel<span className="text-phosphor-green/50">@</span>portfolio
          <span className="text-phosphor-green/50">:~$</span>
          <span className="animate-blink ml-1 inline-block h-4 w-[2px] bg-phosphor-green align-middle" />
        </a>

        <div className="flex items-center gap-3 text-xs">
          <button
            onClick={() => setOpen(true)}
            className="rounded border border-phosphor-green/30 px-3 py-1.5 text-phosphor-green transition-colors hover:border-phosphor-amber hover:text-phosphor-amber"
          >
            [ menu ]
          </button>
          <DownloadResume />
        </div>
      </div>
    </nav>
  );
}
