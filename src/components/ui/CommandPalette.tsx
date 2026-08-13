// src/components/ui/CommandPalette.tsx
"use client";

import { Command } from "cmdk";
import { useCommandPalette } from "@/components/providers/CommandPaletteProvider";
import { useLenis } from "@/components/providers/LenisProvider";
import { profileData } from "@/data/profile";

const SECTIONS = [
  { id: "hero", path: "~/gabriel" },
  { id: "skills", path: "~/gabriel/skills" },
  { id: "projects", path: "~/gabriel/projects" },
  { id: "achievements", path: "~/gabriel/achievements" },
  { id: "about", path: "~/gabriel/about" },
  { id: "personal", path: "~/gabriel/personal" },
  { id: "contact", path: "~/gabriel/contact" },
];

export function CommandPalette() {
  const { open, setOpen } = useCommandPalette();
  const lenis = useLenis();

  function goTo(id: string) {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: -72 });
    else el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Command palette"
      className="fixed left-1/2 top-20 z-[200] w-[92vw] max-w-lg -translate-x-1/2 overflow-hidden rounded-lg border border-phosphor-green/30 bg-crt-panel/95 font-mono text-sm text-phosphor-green shadow-[0_0_60px_-10px_rgba(0,255,157,0.6)] backdrop-blur-md"
    >
      <div className="flex items-center gap-2 border-b border-phosphor-green/15 px-4 py-3 text-phosphor-green/70">
        <span>{">"}</span>
        <Command.Input
          autoFocus
          placeholder="type a command…"
          className="w-full bg-transparent outline-none placeholder:text-phosphor-green/30"
        />
      </div>
      <Command.List className="max-h-80 overflow-y-auto p-2">
        <Command.Empty className="px-3 py-6 text-center text-phosphor-green/40">no results</Command.Empty>
        <Command.Group heading="sections" className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:text-phosphor-green/40">
          {SECTIONS.map((s) => (
            <Command.Item
              key={s.id}
              onSelect={() => goTo(s.id)}
              className="cursor-pointer rounded px-3 py-2 aria-selected:bg-phosphor-green/10 aria-selected:text-phosphor-amber"
            >
              {s.path}
            </Command.Item>
          ))}
        </Command.Group>
        <Command.Group heading="links" className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:text-phosphor-green/40">
          <Command.Item
            onSelect={() => window.open(profileData.linkedin, "_blank")}
            className="cursor-pointer rounded px-3 py-2 aria-selected:bg-phosphor-green/10 aria-selected:text-phosphor-amber"
          >
            open linkedin
          </Command.Item>
          <Command.Item
            onSelect={() => window.open(profileData.github, "_blank")}
            className="cursor-pointer rounded px-3 py-2 aria-selected:bg-phosphor-green/10 aria-selected:text-phosphor-amber"
          >
            open github
          </Command.Item>
          <Command.Item
            onSelect={() => {
              setOpen(false);
              document.getElementById("download-resume-trigger")?.click();
            }}
            className="cursor-pointer rounded px-3 py-2 aria-selected:bg-phosphor-green/10 aria-selected:text-phosphor-amber"
          >
            download resume
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
}
