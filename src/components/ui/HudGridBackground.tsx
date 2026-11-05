// src/components/ui/HudGridBackground.tsx
interface HudGridBackgroundProps {
  variant?: "default" | "subtle";
}

export function HudGridBackground({ variant = "default" }: HudGridBackgroundProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${variant === "subtle" ? "opacity-60" : ""}`} aria-hidden>
      <div className="hud-grid absolute inset-0" />
      <div className="absolute -top-24 left-[8%] h-96 w-96 rounded-full bg-phosphor-green/[0.10] blur-[140px]" />
      <div className="absolute bottom-0 right-[8%] h-80 w-80 rounded-full bg-phosphor-amber/[0.08] blur-[130px]" />
    </div>
  );
}
