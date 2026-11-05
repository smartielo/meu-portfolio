// src/components/layouts/SectionDock.tsx
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const SECTIONS = [
  { id: "hero", label: "Início" },
  { id: "skills", label: "Habilidades" },
  { id: "projects", label: "Projetos" },
  { id: "achievements", label: "Conquistas" },
  { id: "about", label: "Estudos" },
  { id: "personal", label: "Sobre" },
  { id: "contact", label: "Contato" },
];

export function SectionDock() {
  const pathname = usePathname();
  const [active, setActive] = useState("hero");

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
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          <span
            className={`text-[10px] font-semibold uppercase tracking-widest opacity-0 transition-opacity group-hover:opacity-100 ${
              active === s.id ? "text-phosphor-amber" : "text-phosphor-green/60"
            }`}
          >
            {s.label}
          </span>
          <span
            className={`h-2 w-2 rounded-full border transition-all ${
              active === s.id
                ? "scale-125 border-phosphor-green bg-phosphor-green shadow-[0_0_12px_rgba(139,156,255,0.7)]"
                : "border-phosphor-green/40 group-hover:border-phosphor-green"
            }`}
          />
        </button>
      ))}
    </nav>
  );
}
