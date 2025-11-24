"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/profile";

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Elemento decorativo de fundo (opcional) */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="container mx-auto px-6">
        
        {/* Título da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl mb-4">
            Minhas Habilidades
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Grid de Categorias */}
        <div className="grid gap-8 md:grid-cols-3">
          {profileData.skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Delay em cascata (um depois do outro)
              className="group relative rounded-2xl bg-gray-950 p-8 border border-gray-800 hover:border-blue-500/50 transition-colors"
            >
              {/* Efeito de brilho no hover */}
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

              <h3 className="text-xl font-bold text-white mb-6 relative z-10">
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm font-medium text-gray-300 bg-gray-800/50 rounded-full border border-gray-700 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}