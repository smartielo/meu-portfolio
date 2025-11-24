// src/components/sections/Contact.tsx
"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { FiMail, FiLinkedin, FiGithub, FiMessageCircle } from "react-icons/fi";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Vamos trabalhar juntos? <span className="text-blue-500">.</span>
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Estou sempre aberto a novos desafios e oportunidades na área de Desenvolvimento e Dados. 
            Se você tem uma vaga ou um projeto em mente, mande um oi!
          </p>

          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            
            {/* Card Email */}
            <a 
              href={`mailto:${profileData.email}`}
              className="group flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 hover:bg-blue-600 transition-all duration-300 border border-white/5 hover:border-blue-400"
            >
              <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20">
                <FiMail className="text-xl text-white" />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-400 group-hover:text-blue-100">Email</p>
                <p className="text-sm font-medium text-white">{profileData.email}</p>
              </div>
            </a>

            {/* Card LinkedIn */}
            <a 
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 hover:bg-blue-700 transition-all duration-300 border border-white/5 hover:border-blue-400"
            >
              <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20">
                <FiLinkedin className="text-xl text-white" />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-400 group-hover:text-blue-100">LinkedIn</p>
                <p className="text-sm font-medium text-white">/in/gabrielmartielo</p>
              </div>
            </a>
            
            {/* Botão GitHub */}
            <a 
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-700 transition-all duration-300 border border-white/5 hover:border-gray-500"
            >
              <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20">
                <FiGithub className="text-xl text-white" />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-400 group-hover:text-gray-200">GitHub</p>
                <p className="text-sm font-medium text-white">Ver Repositórios</p>
              </div>
            </a>

             {/* Botão WhatsApp (Opcional - Adicionei baseado no seu PDF) */}
             <a 
              href="https://wa.me/5514991255559"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 hover:bg-green-600 transition-all duration-300 border border-white/5 hover:border-green-400"
            >
              <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20">
                <FiMessageCircle className="text-xl text-white" />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-400 group-hover:text-green-100">WhatsApp</p>
                <p className="text-sm font-medium text-white">(14) 99125-5559</p>
              </div>
            </a>

          </div>
          
          <div className="mt-12 pt-8 border-t border-white/5 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Gabriel Martielo. Desenvolvido com Next.js & Tailwind.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}