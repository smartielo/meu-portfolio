// src/components/sections/About.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { profileData } from "@/data/profile";
import { FiCpu, FiMonitor } from "react-icons/fi";

export function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-black/20">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* COLUNA 1: O Setup (Foto + Specs) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Meu Setup <span className="text-blue-500">.</span>
            </h2>
            
            {/* Foto do Setup com Moldura Neon */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-colors z-10" />
              
              {/* Imagem Real (Placeholder por enquanto) */}
              <Image
                src={profileData.setup.image}
                alt="Meu Setup"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                // Fallback caso não tenha foto ainda
                onError={(e) => {
                    e.currentTarget.style.display = "none";
                }}
              />
              {/* Fallback visual se a imagem falhar */}
              <div className="absolute inset-0 bg-gray-900 flex items-center justify-center -z-10">
                 <FiMonitor className="text-6xl text-gray-700" />
              </div>
            </div>

            {/* Tags de Specs (Igual ao seu GitHub) */}
            <div className="mt-6 flex flex-wrap gap-3">
              {profileData.setup.specs.map((spec, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 rounded-lg border border-gray-700 text-sm text-gray-300"
                >
                  <FiCpu className="text-blue-400" />
                  {spec}
                </div>
              ))}
            </div>
          </motion.div>

          {/* COLUNA 2: O Gráfico de Estudos (Progress Bars) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white mb-2">
              Aprendizado Atual <span className="text-purple-500">.</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Tecnologias que estou explorando e me aprofundando no momento.
            </p>

            <div className="space-y-6">
              {profileData.studying?.map((tech, index) => (
                <div key={tech.label}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-white">{tech.label}</span>
                    <span className="text-xs font-mono text-gray-400">{tech.level}%</span>
                  </div>
                  
                  {/* Barra de Fundo */}
                  <div className="h-3 w-full bg-gray-800 rounded-full overflow-hidden">
                    {/* Barra Colorida Animada */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + (index * 0.1), ease: "easeOut" }}
                      className="h-full rounded-full relative"
                      style={{ backgroundColor: tech.color }}
                    >
                      {/* Brilho na ponta da barra */}
                      <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/50 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cardzinho estilo GitHub "Most Used" decorativo */}
            <div className="mt-8 p-4 bg-gray-900/50 rounded-xl border border-white/5">
              <div className="flex gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <p className="text-xs text-gray-500 font-mono">
                $ while(alive) &#123; study(); code(); &#125;
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}