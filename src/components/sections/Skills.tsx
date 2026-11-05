// src/components/sections/Skills.tsx
"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { FiCode, FiDatabase, FiTool } from "react-icons/fi";
import { CinematicSection } from "@/components/layouts/CinematicSection";

export function Skills() {
  const getIcon = (index: number) => {
    if (index === 0) return <FiCode className="text-2xl text-phosphor-green" />;
    if (index === 1) return <FiDatabase className="text-2xl text-phosphor-amber" />;
    return <FiTool className="text-2xl text-phosphor-green" />;
  };

  return (
    <CinematicSection id="skills" className="relative overflow-hidden py-32">
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-phosphor-green">Stack & especialidades</p>
          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">Habilidades</h2>
          <p className="mt-2 max-w-xl text-foreground/70">
            Um mix de tecnologias para criar interfaces bonitas e processar dados complexos.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {profileData.skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-3xl border border-white/8 bg-white/[0.035] p-7 backdrop-blur transition-all hover:-translate-y-1 hover:border-phosphor-green/30 hover:bg-white/[0.055]"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-2xl border border-white/8 bg-white/5 p-3">
                  {getIcon(index)}
                </div>
                <h3 className="text-base font-bold text-phosphor-green">{category.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/8 bg-white/5 px-3 py-1.5 text-xs text-foreground/65 transition-colors group-hover:border-phosphor-green/20 group-hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </CinematicSection>
  );
}
