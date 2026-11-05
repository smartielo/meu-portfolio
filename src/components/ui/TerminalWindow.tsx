// src/components/ui/TerminalWindow.tsx
interface TerminalWindowProps {
  path: string;
  title?: string;
  accent?: "green" | "amber";
  className?: string;
  children: React.ReactNode;
}

export function TerminalWindow({ path, title, accent = "green", className = "", children }: TerminalWindowProps) {
  const glow = accent === "amber" ? "rgba(197,167,255,0.16)" : "rgba(139,156,255,0.16)";

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-crt-panel/70 backdrop-blur-xl ${className}`}
      style={{ boxShadow: `0 24px 80px -36px ${glow}, inset 0 1px rgba(255,255,255,.05)` }}
    >
      <div className="flex items-center justify-between border-b border-white/8 px-6 py-4 text-xs text-foreground/45">
        <span className="truncate font-medium tracking-wide">{title || path.replace(/^.*\//, "")}</span>
        <span className="h-2 w-2 rounded-full bg-phosphor-green shadow-[0_0_16px_rgba(139,156,255,.8)]" />
      </div>
      <div className="p-6 md:p-8">{children}</div>
    </div>
  );
}
