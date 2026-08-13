// src/components/ui/DownloadResume.tsx
"use client";

import { useEffect, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { ResumeDocument } from "@/components/pdf/ResumeDocument";
import { FiDownload, FiLoader, FiCheckCircle } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import QRCode from "qrcode";

export function DownloadResume() {
  const [isClient, setIsClient] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  useEffect(() => {
    setIsClient(true);
    // Gera o QR Code assim que o site carrega
    QRCode.toDataURL("https://www.gabrielmartielo.com.br")
      .then((url) => setQrCodeUrl(url))
      .catch((err) => console.error(err));
  }, []);

  const handleDownloadStart = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }) //leva ao topo da pagina ao iniciar o download
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
      <button className="flex items-center gap-2 border border-phosphor-green/20 px-4 py-1.5 font-mono text-xs text-phosphor-green/40 cursor-wait">
        <FiLoader className="animate-spin" /> carregando...
      </button>
    );
  }

  return (
    <>
      {/* BOTÃO VISÍVEL (O Gatilho)
        Este botão NÃO baixa nada, apenas inicia a função handleDownloadStart
      */}
      <button
        id="download-resume-trigger"
        onClick={handleDownloadStart}
        className="flex items-center gap-2 border border-phosphor-green/30 px-3 py-1.5 font-mono text-xs text-phosphor-green transition-colors hover:border-phosphor-amber hover:text-phosphor-amber"
      >
        <FiDownload />
        [ baixar cv ]
      </button>

      {/* BOTÃO INVISÍVEL (O Verdadeiro Download) 
        Fica escondido (hidden) e só é acionado pelo JavaScript
      */}
      <div id="hidden-resume-downloader" className="hidden">
        {qrCodeUrl && (
            <PDFDownloadLink
            document={<ResumeDocument qrCodeUrl={qrCodeUrl} />} // Passando o QR
            fileName="Curriculo_Gabriel_Martielo.pdf"
            >
            <button>Download Real</button>
            </PDFDownloadLink>
        )}
      </div>

      {/* O OVERLAY (Tela de Loading) */}
      <AnimatePresence>
        {(isGenerating || isSuccess) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-md"
          >
            <div className="flex min-w-[300px] flex-col items-center border border-phosphor-green/20 bg-crt-panel p-8 text-center font-mono shadow-2xl">

              {isGenerating ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="mb-4"
                  >
                    <FiLoader className="text-5xl text-phosphor-green" />
                  </motion.div>
                  <h3 className="mb-2 text-lg font-bold text-phosphor-green">{"> "}gerando pdf...</h3>
                  <p className="text-sm text-foreground/60">
                    compilando a versão mais recente do seu currículo.
                  </p>
                </>
              ) : (
                <>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="mb-4"
                  >
                    <FiCheckCircle className="text-5xl text-phosphor-amber" />
                  </motion.div>
                  <h3 className="mb-2 text-lg font-bold text-phosphor-amber">[ pronto! ]</h3>
                  <p className="text-sm text-foreground/60">
                    o download iniciará automaticamente.
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