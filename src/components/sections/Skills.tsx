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
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-16 font-mono"
        >
          <p className="mb-2 text-phosphor-green/60">{"> "}ls ~/gabriel/skills</p>
          <h2 className="text-3xl font-bold text-phosphor-green md:text-4xl">Habilidades</h2>
          <p className="mt-2 max-w-xl text-foreground/70">
            Um mix de tecnologias para criar interfaces bonitas e processar dados complexos.
          </p>
        </motion.div>

        <div className="grid gap-6 font-mono md:grid-cols-3">
          {profileData.skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border border-phosphor-green/15 bg-crt-panel/40 p-6 transition-colors hover:border-phosphor-green/40"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded border border-phosphor-green/10 bg-black/30 p-2.5">
                  {getIcon(index)}
                </div>
                <h3 className="text-base font-bold text-phosphor-green">{category.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-phosphor-green/15 bg-black/20 px-2.5 py-1 text-xs text-foreground/70 transition-colors group-hover:border-phosphor-green/30 group-hover:text-foreground"
                  >
                    [{skill}]
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
