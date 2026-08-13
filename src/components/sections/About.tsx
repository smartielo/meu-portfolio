// src/components/sections/About.tsx
"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { CinematicSection } from "@/components/layouts/CinematicSection";

export function About() {
  return (
    <CinematicSection id="about" className="relative overflow-hidden bg-black/20 py-20">
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl"
        >
          <TerminalWindow path="~/gabriel/about" title="learning" accent="amber">
            <p className="mb-6 text-foreground/70">
              Tecnologias que estou explorando e me aprofundando no momento.
            </p>

            <div className="space-y-6 font-mono">
              {profileData.studying?.map((tech, index) => (
                <div key={tech.label}>
                  <div className="mb-2 flex justify-between">
                    <span className="font-semibold text-phosphor-green">{tech.label}</span>
                    <span className="text-xs text-foreground/50">{tech.level}%</span>
                  </div>

                  <div className="h-2.5 w-full overflow-hidden border border-phosphor-green/10 bg-black/30">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                      className="relative h-full bg-phosphor-amber"
                    >
                      <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/60 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bloco decorativo estilo terminal */}
            <div className="mt-8 border border-phosphor-green/10 bg-black/30 p-4">
              <div className="mb-2 flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/70" />
                <div className="h-3 w-3 rounded-full bg-phosphor-amber/70" />
                <div className="h-3 w-3 rounded-full bg-phosphor-green/70" />
              </div>
              <p className="font-mono text-base text-foreground/70 md:text-lg">
                <span className="mr-2 text-phosphor-green">$</span>
                <span className="text-phosphor-amber">while</span>(alive) &#123;
                <br className="md:hidden" />
                <span className="pl-4 md:pl-0">
                  <span className="text-phosphor-green">study</span>(); <span className="text-phosphor-green">code</span>();
                </span>
                &#125;
                <span className="animate-blink ml-1 inline-block h-5 w-2 bg-phosphor-green align-middle" />
              </p>
            </div>
          </TerminalWindow>
        </motion.div>
      </div>
    </CinematicSection>
  );
}
