import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Globe, Camera, Instagram } from "lucide-react";
import { HudGridBackground } from "@/components/ui/HudGridBackground";
import { TerminalWindow } from "@/components/ui/TerminalWindow";

const links = [
  {
    title: "Portfólio Oficial",
    url: "/",
    icon: Globe,
    label: "open_portfolio",
  },
  {
    title: "VSCO",
    url: "https://vsco.co/gbehindthescenes",
    icon: Camera,
    label: "open_vsco",
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/in/gabrielmartielo",
    icon: Linkedin,
    label: "open_linkedin",
  },
  {
    title: "GitHub",
    url: "https://github.com/smartielo",
    icon: Github,
    label: "open_github",
  },
  {
    title: "Instagram",
    url: "https://instagram.com/gmartielos",
    icon: Instagram,
    label: "open_instagram",
  },
];

export default function LinksPage() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden bg-background text-foreground font-mono">
      <HudGridBackground />

      <div className="z-10 w-full max-w-lg">
        <TerminalWindow path="~/links" title="connect_socials" className="mx-auto">
          <div className="flex flex-col items-center text-center gap-6">
            
            {/* Profile Picture */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-phosphor-green/30 rounded-full blur group-hover:blur-md transition-all duration-500" />
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-phosphor-green shadow-[0_0_15px_rgba(0,255,0,0.2)]">
                <Image
                  src="/projects/perfillinks.jpg"
                  alt="Gabriel Martielo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Header */}
            <div className="space-y-1">
              <h1 className="text-xl font-bold text-phosphor-green tracking-tighter">
                GABRIEL MARTIELO
              </h1>
              <p className="text-phosphor-amber text-xs opacity-80">
                Full Stack Dev | Computer Science Student
              </p>
            </div>

            {/* Links Grid */}
            <div className="w-full grid gap-3 mt-4">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  target={link.url.startsWith("/") ? "_self" : "_blank"}
                  className="group relative flex items-center gap-3 p-3 bg-phosphor-green/5 border border-phosphor-green/20 hover:border-phosphor-amber/50 hover:bg-phosphor-green/10 transition-all duration-200"
                >
                  <div className="text-phosphor-green group-hover:text-phosphor-amber transition-colors">
                    <link.icon size={18} />
                  </div>
                  
                  <span className="text-sm text-phosphor-green/80 group-hover:text-phosphor-amber transition-colors">
                    {link.title}
                  </span>

                  <span className="ml-auto text-[10px] text-phosphor-green/40 group-hover:text-phosphor-amber/60 font-mono">
                    [{link.label}]
                  </span>
                </Link>
              ))}
            </div>

            {/* Footer */}
            <footer className="mt-6 pt-4 border-t border-phosphor-green/10 w-full text-phosphor-green/30 text-[10px] text-center">
              <p>© 2026 GABRIEL MARTIELO // SYSTEM_READY</p>
            </footer>
          </div>
        </TerminalWindow>
      </div>
    </main>
  );
}
