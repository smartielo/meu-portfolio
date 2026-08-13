// src/components/ui/NeofetchCard.tsx
import { profileData } from "@/data/profile";

export function NeofetchCard() {
  const stack = profileData.skills[0]?.skills.slice(0, 4).join(", ") ?? "";

  const rows: [string, string][] = [
    ["host", profileData.location],
    ["role", profileData.role],
    ["stack", stack],
    ["since", "codando desde 2023"],
  ];

  return (
    <div className="flex h-full flex-col justify-center border border-phosphor-green/10 bg-black/30 p-4 font-mono text-sm">
      <p className="mb-2 text-xs uppercase tracking-widest text-phosphor-amber">neofetch</p>
      <div className="space-y-1">
        {rows.map(([label, value]) => (
          <p key={label} className="truncate text-foreground/70">
            <span className="text-phosphor-green">{label}</span>
            <span className="text-foreground/30"> — </span>
            {value}
          </p>
        ))}
      </div>
    </div>
  );
}
