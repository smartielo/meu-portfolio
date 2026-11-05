// src/components/ui/NeofetchCard.tsx
import { profileData } from "@/data/profile";

export function NeofetchCard() {
  const stack = profileData.skills[0]?.skills.slice(0, 4).join(", ") ?? "";

  const rows: [string, string][] = [
    ["Local", profileData.location],
    ["Atuação", profileData.role],
    ["Stack", stack],
    ["Experiência", "desenvolvendo desde 2023"],
  ];

  return (
    <div className="flex h-full flex-col justify-center rounded-2xl border border-white/8 bg-white/[0.035] p-5 text-sm backdrop-blur">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-phosphor-amber">Em resumo</p>
      <div className="space-y-1">
        {rows.map(([label, value]) => (
          <p key={label} className="break-words leading-relaxed text-foreground/70">
            <span className="font-medium text-phosphor-green">{label}</span>
            <span className="text-foreground/25"> · </span>
            {value}
          </p>
        ))}
      </div>
    </div>
  );
}
