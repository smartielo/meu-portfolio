// src/components/sections/Skills.tsx
"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { FiCode, FiDatabase, FiTool } from "react-icons/fi"; // Ícones para ilustrar

export function Skills() {
  // Mapeando ícones para categorias (opcional, mas fica bonito)
  const getIcon = (category: string) => {
    if (category.includes("Front-end")) return <FiCode className="text-3xl text-blue-400" />;
    if (category.includes("Back-end")) return <FiDatabase className="text-3xl text-purple-400" />;
    return <FiTool className="text-3xl text-green-400" />;
  };

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* NOTA: Removi o bg-gray-900. Agora o fundo é transparente, 
          aproveitando o fundo global dark do site.
      */}

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Título da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Habilidades <span className="text-blue-500">.</span>
          </h2>
          <p className="text-gray-400 max-w-xl">
            Um mix de tecnologias para criar interfaces bonitas e processar dados complexos.
          </p>
        </motion.div>

        {/* Grid de Categorias */}
        <div className="grid gap-6 md:grid-cols-3">
          {profileData.skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // AQUI ESTÁ A MÁGICA: Glassmorphism
              className="group relative p-8 rounded-3xl 
                         bg-white/5 border border-white/10 backdrop-blur-sm
                         hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
            >
              
              {/* Cabeçalho do Card */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-black/30 border border-white/5">
                  {getIcon(category.category)}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.category}
                </h3>
              </div>

              {/* Lista de Skills (Tags) */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm text-gray-300 bg-black/20 rounded-md border border-white/5 
                               group-hover:text-white group-hover:border-white/20 transition-colors"
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