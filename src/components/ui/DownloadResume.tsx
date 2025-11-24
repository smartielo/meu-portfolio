// src/components/ui/DownloadResume.tsx
"use client";

import { useEffect, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { ResumeDocument } from "@/components/pdf/ResumeDocument";
import { FiDownload, FiLoader, FiCheckCircle } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export function DownloadResume() {
  const [isClient, setIsClient] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDownloadStart = () => {
    // 1. Inicia a Animação de Loading
    setIsGenerating(true);
    
    // 2. Espera o tempo "Fake" (2.5 segundos)
    setTimeout(() => {
      setIsGenerating(false);
      setIsSuccess(true);
      
      // 3. A MÁGICA: Clica no link escondido via código
      // Procuramos a tag <a> dentro da div escondida e forçamos o clique
      const hiddenLink = document.querySelector('#hidden-resume-downloader a') as HTMLElement;
      if (hiddenLink) {
        hiddenLink.click();
      }
      
      // 4. Fecha o modal de sucesso depois de 2 segundos
      setTimeout(() => setIsSuccess(false), 2000);
    }, 2500);
  };

  if (!isClient) {
    return (
      <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-500 bg-gray-200 rounded-full cursor-wait">
        <FiLoader className="animate-spin" /> Carregando...
      </button>
    );
  }

  return (
    <>
      {/* BOTÃO VISÍVEL (O Gatilho) 
        Este botão NÃO baixa nada, apenas inicia a função handleDownloadStart 
      */}
      <button
        onClick={handleDownloadStart}
        className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-black bg-white rounded-full hover:bg-gray-200 hover:scale-105 transition-all"
      >
        <FiDownload />
        Baixar CV
      </button>

      {/* BOTÃO INVISÍVEL (O Verdadeiro Download) 
        Fica escondido (hidden) e só é acionado pelo JavaScript
      */}
      <div id="hidden-resume-downloader" className="hidden">
        <PDFDownloadLink
          document={<ResumeDocument />}
          fileName="Curriculo_Gabriel_Martielo.pdf"
        >
          {/* O texto aqui não importa pois está escondido */}
          <button>Download Real</button>
        </PDFDownloadLink>
      </div>

      {/* O OVERLAY (Tela de Loading) */}
      <AnimatePresence>
        {(isGenerating || isSuccess) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md"
          >
            <div className="text-center p-8 bg-gray-900 border border-white/10 rounded-2xl shadow-2xl flex flex-col items-center min-w-[300px]">
              
              {isGenerating ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="mb-4"
                  >
                    <FiLoader className="text-5xl text-blue-500" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">Gerando PDF...</h3>
                  <p className="text-gray-400 text-sm">
                    Compilando a versão mais recente do seu currículo.
                  </p>
                </>
              ) : (
                <>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="mb-4"
                  >
                    <FiCheckCircle className="text-5xl text-green-500" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">Pronto!</h3>
                  <p className="text-gray-400 text-sm">
                    O download iniciará automaticamente.
                  </p>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}