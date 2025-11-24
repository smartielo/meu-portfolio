"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi"; // Ícones
import { profileData } from "@/data/profile";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detecta o scroll para mudar o estilo da navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#hero" },
    { name: "Habilidades", href: "#skills" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 z-80 w-full transition-all duration-300 ${
        isScrolled
          // MUDEI AQUI:
          // De: bg-black/80 ou bg-black/95
          // Para: bg-black/40 (Mais transparente) + backdrop-blur-xl (Desfoque mais forte)
          ? "bg-black/40 backdrop-blur-xl shadow-lg py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo / Nome */}
        <Link 
          href="/" 
          className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform">
          dev.gabrielmartielo/ui
        </Link>

        {/* Links Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white hover:scale-105 transition-all"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Botão Currículo (Placeholder para o PDF) */}
          <button className="px-4 py-2 text-sm font-semibold text-black bg-white rounded-full hover:bg-gray-200 transition-colors">
            Baixar CV
          </button>
        </div>

        {/* Menu Mobile (Ícone) */}
        <button 
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Menu Mobile (Dropdown) */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10"
        >
          <div className="flex flex-col p-6 gap-4">
             {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white"
                >
                  {link.name}
                </Link>
             ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}