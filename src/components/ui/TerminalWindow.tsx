// src/components/ui/TerminalWindow.tsx
interface TerminalWindowProps {
  path: string;
  title?: string;
  accent?: "green" | "amber";
  className?: string;
  children: React.ReactNode;
}

export function TerminalWindow({ path, title, accent = "green", className = "", children }: TerminalWindowProps) {
  const glow = accent === "amber" ? "rgba(255,176,0,0.35)" : "rgba(0,255,157,0.35)";

  return (
    <div
      className={`relative rounded-lg border border-phosphor-green/20 bg-crt-panel/60 backdrop-blur-sm ${className}`}
      style={{ boxShadow: `0 0 40px -18px ${glow}` }}
    >
      <div className="flex items-center gap-2 border-b border-phosphor-green/10 px-4 py-2.5 font-mono text-xs text-phosphor-green/70">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-phosphor-amber/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-phosphor-green/70" />
        </span>
        <span className="ml-2 truncate">
          {path}
          {title ? ` — ${title}` : ""}
        </span>
      </div>
      <div className="p-6 md:p-8">{children}</div>
    </div>
  );
}
