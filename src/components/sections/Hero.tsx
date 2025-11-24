// src/components/sections/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export function Hero() {
  // Configuração da animação de digitação
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08, // Velocidade da digitação
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-950 pt-20"
    >
      {/* Background Effect */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-blue-600/20 blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-600/10 blur-[128px]" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4 text-lg font-medium text-blue-400"
        >
          Olá, meu nome é
        </motion.p>

        {/* EFEITO DE DIGITAÇÃO */}
        <motion.h1
          className="mb-6 text-5xl font-bold text-white md:text-7xl"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {profileData.name.split("").map((char, index) => (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }} // Delay maior para esperar o nome ser digitado
          className="mb-8 text-2xl font-semibold text-gray-400 md:text-4xl"
        >
          {profileData.role}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.7 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-gray-400 leading-relaxed"
        >
          {profileData.headline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.9 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition-all hover:bg-blue-700 hover:scale-105"
          >
            <FiLinkedin /> LinkedIn
          </a>
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-gray-700 bg-gray-900 px-6 py-3 font-semibold text-white transition-all hover:bg-gray-800 hover:border-gray-500 hover:scale-105"
          >
            <FiGithub /> GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}