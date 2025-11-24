// src/components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi"; 
import { DownloadResume } from "@/components/ui/DownloadResume";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    { name: "Sobre", href: "#about" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <>
      {/* 1. O OVERLAY (Fundo Escuro e Desfocado) */}
      {/* Ele cobre o site inteiro quando o menu abre para dar foco */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsMobileMenuOpen(false)} // Clicar no fundo fecha o menu
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* 2. A BARRA DE NAVEGAÇÃO (Fica por cima de tudo, z-50) */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled || isMobileMenuOpen 
            ? "bg-black/80 backdrop-blur-xl shadow-lg py-4" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo / Nome */}
          <Link 
            href="/" 
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            dev.gabrielmartielo/about
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
            
            <DownloadResume />
          </div>

          {/* Menu Mobile (Ícone) */}
          <button 
            className="md:hidden text-white text-2xl outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Menu Mobile (Dropdown que empurra o conteúdo) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }} // Volta a ser auto (apenas o tamanho necessário)
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-6 items-center bg-transparent">
                 {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-200 hover:text-white text-lg font-medium"
                    >
                      {link.name}
                    </Link>
                 ))}
                 
                 <div onClick={() => setIsMobileMenuOpen(false)}>
                    <DownloadResume />
                 </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}