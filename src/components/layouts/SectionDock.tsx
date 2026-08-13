// src/components/layouts/SectionDock.tsx
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "@/components/providers/LenisProvider";

const SECTIONS = [
  { id: "hero", label: "boot" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "achievements", label: "wins" },
  { id: "about", label: "learning" },
  { id: "personal", label: "human" },
  { id: "contact", label: "contact" },
];

export function SectionDock() {
  const pathname = usePathname();
  const [active, setActive] = useState("hero");
  const lenis = useLenis();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  if (pathname === "/links") return null;

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-4 md:flex"
    >
      {SECTIONS.map((s) => (
        <button
          key={s.id}
          aria-current={active === s.id}
          className="group flex items-center justify-end gap-3"
          onClick={() => {
            const el = document.getElementById(s.id);
            if (!el) return;
            if (lenis) lenis.scrollTo(el, { offset: -72 });
            else el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span
            className={`font-mono text-[10px] uppercase tracking-widest opacity-0 transition-opacity group-hover:opacity-100 ${
              active === s.id ? "text-phosphor-amber" : "text-phosphor-green/60"
            }`}
          >
            {s.label}
          </span>
          <span
            className={`h-2 w-2 rounded-full border transition-all ${
              active === s.id
                ? "scale-125 border-phosphor-amber bg-phosphor-amber shadow-[0_0_8px_rgba(255,176,0,0.8)]"
                : "border-phosphor-green/40 group-hover:border-phosphor-green"
            }`}
          />
        </button>
      ))}
    </nav>
  );
}
