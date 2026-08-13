// src/components/sections/Contact.tsx
"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { FiMail, FiLinkedin, FiGithub, FiMessageCircle } from "react-icons/fi";
import { HudGridBackground } from "@/components/ui/HudGridBackground";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { CinematicSection } from "@/components/layouts/CinematicSection";

export function Contact() {
  return (
    <CinematicSection id="contact" className="relative overflow-hidden py-24">
      <HudGridBackground variant="subtle" />
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mx-auto max-w-4xl"
        >
          <TerminalWindow path="~/gabriel/contact" title="send --message" className="text-center">
            <h2 className="mb-4 font-mono text-3xl font-bold text-phosphor-green md:text-4xl">
              Vamos trabalhar juntos?
            </h2>
            <p className="mb-8 text-lg text-foreground/70">
              Estou sempre aberto a novos desafios e oportunidades na área de Desenvolvimento e Dados.
              Se você tem uma vaga ou um projeto em mente, mande um oi!
            </p>

            <div className="mx-auto grid max-w-2xl gap-4 font-mono md:grid-cols-2">
              {/* Card Email */}
              <a
                href={`mailto:${profileData.email}`}
                className="group flex items-center gap-4 border border-phosphor-green/15 bg-black/20 p-4 text-left transition-all duration-300 hover:border-phosphor-amber hover:bg-phosphor-green/5"
              >
                <div className="rounded-full bg-white/10 p-3 group-hover:bg-white/20">
                  <FiMail className="text-xl text-phosphor-green" />
                </div>
                <div>
                  <p className="text-xs text-foreground/50">Email</p>
                  <p className="text-sm font-medium text-foreground">{profileData.email}</p>
                </div>
              </a>

              {/* Card LinkedIn */}
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border border-phosphor-green/15 bg-black/20 p-4 text-left transition-all duration-300 hover:border-phosphor-amber hover:bg-phosphor-green/5"
              >
                <div className="rounded-full bg-white/10 p-3 group-hover:bg-white/20">
                  <FiLinkedin className="text-xl text-phosphor-green" />
                </div>
                <div>
                  <p className="text-xs text-foreground/50">LinkedIn</p>
                  <p className="text-sm font-medium text-foreground">/in/gabrielmartielo</p>
                </div>
              </a>

              {/* Botão GitHub */}
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border border-phosphor-green/15 bg-black/20 p-4 text-left transition-all duration-300 hover:border-phosphor-amber hover:bg-phosphor-green/5"
              >
                <div className="rounded-full bg-white/10 p-3 group-hover:bg-white/20">
                  <FiGithub className="text-xl text-phosphor-green" />
                </div>
                <div>
                  <p className="text-xs text-foreground/50">GitHub</p>
                  <p className="text-sm font-medium text-foreground">Ver Repositórios</p>
                </div>
              </a>

              {/* Botão WhatsApp */}
              <a
                href="https://wa.me/5514991255559"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border border-phosphor-green/15 bg-black/20 p-4 text-left transition-all duration-300 hover:border-phosphor-amber hover:bg-phosphor-green/5"
              >
                <div className="rounded-full bg-white/10 p-3 group-hover:bg-white/20">
                  <FiMessageCircle className="text-xl text-phosphor-green" />
                </div>
                <div>
                  <p className="text-xs text-foreground/50">WhatsApp</p>
                  <p className="text-sm font-medium text-foreground">(14) 99125-5559</p>
                </div>
              </a>
            </div>

            <div className="mt-12 border-t border-phosphor-green/10 pt-8 text-sm text-foreground/40">
              <p>© {new Date().getFullYear()} Gabriel Martielo. Desenvolvido com Next.js & Tailwind.</p>
            </div>
          </TerminalWindow>
        </motion.div>
      </div>
    </CinematicSection>
  );
}
