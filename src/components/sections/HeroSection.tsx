"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export function Hero() {
  return (
    <section 
      id="hero" 
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-950 pt-20"
    >
      
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-500/20 blur-[128px]" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4 text-lg font-medium text-blue-400"
        >
          Olá, meu nome é
        </motion.p>

        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-6 text-5xl font-bold text-white md:text-7xl"
        >
          {profileData.name}
        </motion.h1>

        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8 text-2xl font-semibold text-gray-400 md:text-4xl"
        >
          {profileData.role}
        </motion.h2>

        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-gray-400 leading-relaxed"
        >
          {profileData.headline}
        </motion.p>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
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