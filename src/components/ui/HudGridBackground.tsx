// src/components/ui/HudGridBackground.tsx
interface HudGridBackgroundProps {
  variant?: "default" | "subtle";
}

export function HudGridBackground({ variant = "default" }: HudGridBackgroundProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="hud-grid absolute inset-0" />
      {variant === "default" && (
        <div className="animate-scan-beam absolute inset-x-0 top-0 h-px bg-phosphor-green/40" />
      )}
      <div className="absolute top-1/3 left-1/4 h-72 w-72 rounded-full bg-phosphor-green/[0.04] blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-phosphor-amber/[0.03] blur-[120px]" />
    </div>
  );
}
