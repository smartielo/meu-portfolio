// src/components/ui/ShareFloating.tsx
"use client";

import { FiShare2 } from "react-icons/fi";
import { motion } from "framer-motion";

export function ShareFloating() {
  
  const handleShare = async () => {
    const shareData = {
      title: 'Portfólio Gabriel Martielo',
      text: 'Confira o portfólio Full Stack e Dados do Gabriel!',
      url: 'https://www.gabrielmartielo.com.br',
    };

    // Tenta usar a API nativa do celular (abre a gaveta de apps)
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Erro ao compartilhar', err);
      }
    } else {
      // Fallback para PC: Copia para área de transferência
      navigator.clipboard.writeText(shareData.url);
      alert("Link copiado para a área de transferência!");
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      onClick={handleShare}
      className="fixed bottom-8 left-8 z-40 p-3 rounded-full bg-green-600 text-white shadow-lg shadow-green-600/30 hover:bg-green-700 hover:scale-110 transition-all flex items-center gap-2"
      aria-label="Compartilhar"
    >
      <FiShare2 className="text-xl" />
    </motion.button>
  );
}