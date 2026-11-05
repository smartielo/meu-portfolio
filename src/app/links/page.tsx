import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Camera, Github, Globe, Instagram, Linkedin } from "lucide-react";
import { HudGridBackground } from "@/components/ui/HudGridBackground";

const links = [
  { title: "Portfólio", description: "Projetos, habilidades e trajetória", url: "/", icon: Globe },
  { title: "LinkedIn", description: "Experiência e conexões profissionais", url: "https://linkedin.com/in/gabrielmartielo", icon: Linkedin },
  { title: "GitHub", description: "Código, estudos e projetos abertos", url: "https://github.com/smartielo", icon: Github },
  { title: "VSCO", description: "Fotografia e momentos", url: "https://vsco.co/gbehindthescenes", icon: Camera },
  { title: "Instagram", description: "Bastidores e vida pessoal", url: "https://instagram.com/gmartielos", icon: Instagram },
];

export default function LinksPage() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background px-4 py-12 text-foreground">
      <HudGridBackground />

      <div className="relative z-10 w-full max-w-xl">
        <div className="mb-8 text-center">
          <div className="relative mx-auto mb-5 h-24 w-24">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-phosphor-green/35 to-phosphor-amber/30 blur-xl" />
            <div className="relative h-full w-full overflow-hidden rounded-full border border-white/15 bg-crt-panel p-1 shadow-2xl">
              <Image src="/projects/perfillinks.jpg" alt="Gabriel Martielo" fill sizes="96px" quality={80} className="rounded-full object-cover p-1" priority />
            </div>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-white">Gabriel Martielo</h1>
          <p className="mt-2 text-sm text-foreground/55">Full Stack Developer · Computer Science</p>
        </div>

        <div className="space-y-3">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.url}
              target={link.url.startsWith("/") ? "_self" : "_blank"}
              className="group flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.045] p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-phosphor-green/30 hover:bg-white/[0.075]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/8 bg-white/5 text-phosphor-green transition group-hover:bg-phosphor-green group-hover:text-background">
                <link.icon size={19} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-white">{link.title}</p>
                <p className="truncate text-xs text-foreground/45">{link.description}</p>
              </div>
              <ArrowUpRight size={18} className="text-foreground/30 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-phosphor-amber" />
            </Link>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-foreground/25">© 2026 Gabriel Martielo</p>
      </div>
    </main>
  );
}
