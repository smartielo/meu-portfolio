// src/components/ui/ScreenshotListener.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiShare2, FiX } from "react-icons/fi";

export function ScreenshotListener() {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // Função que dispara o aviso
    const triggerSharePrompt = () => {
      setShowToast(true);
      // Some sozinho depois de 5 segundos
      setTimeout(() => setShowToast(false), 5000);
    };

    // 1. Detecta tecla PrintScreen
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "PrintScreen") {
        triggerSharePrompt();
      }
      // Detecta Ctrl+S (Salvar) ou Ctrl+P (Imprimir)
      if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'p')) {
         triggerSharePrompt();
      }
    };

    // 2. Detecta evento de impressão do navegador
    const handleBeforePrint = () => {
      triggerSharePrompt();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("beforeprint", handleBeforePrint);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("beforeprint", handleBeforePrint);
    };
  }, []);

  return (
    <AnimatePresence>
      {showToast && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed top-24 left-0 right-0 z-50 flex justify-center pointer-events-none"
        >
          <div className="pointer-events-auto bg-white text-black px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 max-w-sm mx-4">
            <div className="bg-green-100 p-2 rounded-full text-green-600">
              <FiShare2 size={24} />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-sm">Gostou do que viu?</h4>
              <p className="text-xs text-gray-600">
                Compartilhe meu portfólio com seus amigos ou no WhatsApp!
              </p>
            </div>
            <button 
                onClick={() => {
                    // Abre o WhatsApp diretamente com o link
                    window.open(`https://wa.me/?text=Olha%20que%20legal%20o%20portfólio%20desse%20dev:%20https://gabrielmartielo.com.br`, '_blank');
                    setShowToast(false);
                }}
                className="text-xs font-bold text-green-600 hover:underline"
            >
                Enviar no Zap
            </button>
            <button onClick={() => setShowToast(false)} className="text-gray-400 hover:text-black">
              <FiX />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}