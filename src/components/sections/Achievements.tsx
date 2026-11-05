// src/components/sections/Achievements.tsx
"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { FaGoogle } from "react-icons/fa";
import { FiAward, FiExternalLink } from "react-icons/fi";
import { HudGridBackground } from "@/components/ui/HudGridBackground";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { CinematicSection } from "@/components/layouts/CinematicSection";

function getIssuerIcon(issuer: string) {
  if (issuer.toLowerCase().includes("google")) {
    return <FaGoogle className="text-2xl text-phosphor-amber" />;
  }
  return <FiAward className="text-2xl text-phosphor-green" />;
}

export function Achievements() {
  const featured = profileData.achievements?.filter((a) => a.featured) ?? [];
  const rest = profileData.achievements?.filter((a) => !a.featured) ?? [];

  return (
    <CinematicSection id="achievements" className="relative overflow-hidden py-24">
      <HudGridBackground variant="subtle" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-phosphor-green">Trajetória</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">Conquistas</h2>
          <p className="mt-2 max-w-xl text-foreground/70">
            Reconhecimentos e marcos da minha trajetória em tecnologia.
          </p>
        </motion.div>

        {featured.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="mb-6"
          >
            <TerminalWindow
              path={`~/gabriel/achievements/${achievement.id}`}
              title={achievement.title.toLowerCase().replace(/\s+/g, "_")}
              accent="amber"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-center">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  {getIssuerIcon(achievement.issuer)}
                </div>
                <div className="flex-grow font-mono">
                  <div className="mb-1 flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-bold text-phosphor-green">{achievement.title}</h3>
                    <span className="rounded-full border border-phosphor-amber/25 bg-phosphor-amber/10 px-3 py-1 text-xs text-phosphor-amber">
                      {achievement.issuer}
                    </span>
                  </div>
                  <p className="mb-3 text-xs text-foreground/50">{achievement.date}</p>
                  <p className="text-foreground/80 leading-relaxed">{achievement.description}</p>
                  {achievement.credentialUrl && (
                    <a
                      href={achievement.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm text-phosphor-green transition-colors hover:text-phosphor-amber"
                    >
                      Ver credencial <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>
            </TerminalWindow>
          </motion.div>
        ))}

        {rest.length > 0 ? (
          <div className="grid gap-4 font-mono md:grid-cols-3">
            {rest.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl border border-white/8 bg-white/[0.035] p-6 transition-all hover:-translate-y-1 hover:border-phosphor-green/30"
              >
                <div className="mb-3 flex items-center gap-3">
                  {getIssuerIcon(achievement.issuer)}
                  <h3 className="font-bold text-phosphor-green">{achievement.title}</h3>
                </div>
                <p className="text-sm text-foreground/70">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center border border-dashed border-phosphor-green/15 p-8 text-center font-mono text-sm text-foreground/40"
          >
            Mais conquistas em breve.
          </motion.div>
        )}
      </div>
    </CinematicSection>
  );
}
