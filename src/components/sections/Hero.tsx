"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiLinkedin } from "react-icons/fi";
import { profileData } from "@/data/profile";
import { HudGridBackground } from "@/components/ui/HudGridBackground";
import { NeofetchCard } from "@/components/ui/NeofetchCard";
import { CinematicSection } from "@/components/layouts/CinematicSection";

export function Hero() {
  return (
    <CinematicSection id="hero" className="relative flex items-start overflow-hidden pt-24 pb-16 lg:min-h-screen lg:items-center lg:pt-28">
      <HudGridBackground />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid items-end gap-12 lg:grid-cols-[1.35fr_.65fr]"
          >
            <div>
              {profileData.achievements?.some((a) => a.featured) && (
                <a href="#achievements" className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-foreground/70 backdrop-blur hover:bg-white/10 hover:text-white">
                  Google Student Ambassador <FiArrowUpRight />
                </a>
              )}

              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-phosphor-green">Desenvolvedor Full Stack & Dados</p>
              <h1 className="max-w-4xl text-[2.65rem] font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-7xl lg:text-8xl">
                Soluções digitais com <span className="bg-gradient-to-r from-phosphor-green via-white to-phosphor-amber bg-clip-text text-transparent">clareza e impacto.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-foreground/65 md:text-lg">{profileData.headline}</p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-background transition hover:-translate-y-0.5 hover:bg-phosphor-green">
                  <FiLinkedin /> LinkedIn
                </a>
                <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
                  <FiGithub /> GitHub
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.2em] text-foreground/35">Perfil</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{profileData.name}</h2>
              <p className="mt-1 text-sm text-phosphor-amber">{profileData.role}</p>
              <div className="mt-6 h-px bg-white/8" />
              <p className="mt-6 text-sm leading-relaxed text-foreground/55">Criando experiências web, produtos orientados a dados e soluções que conectam tecnologia a problemas reais.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45, duration: 0.8 }} className="mt-10 max-w-2xl sm:mt-14">
            <NeofetchCard />
          </motion.div>
        </div>
      </div>
    </CinematicSection>
  );
}
