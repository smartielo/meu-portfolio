// src/components/ui/DownloadResume.tsx
"use client";

import { useEffect, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { ResumeDocument } from "@/components/pdf/ResumeDocument";
import { FiDownload } from "react-icons/fi";

export function DownloadResume() {
  const [isClient, setIsClient] = useState(false);

  // Hack necessário: O PDF só pode ser gerado no navegador, não no servidor
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-black bg-white rounded-full opacity-50 cursor-wait">
        <FiDownload /> Carregando...
      </button>
    );
  }

  return (
    <PDFDownloadLink
      document={<ResumeDocument />}
      fileName="Curriculo_Gabriel_Martielo.pdf"
      className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-black bg-white rounded-full hover:bg-gray-200 hover:scale-105 transition-all"
    >
      {/* @ts-ignore - A tipagem do PDFDownloadLink as vezes reclama do children function */}
      {({ loading }) => (
        <>
          <FiDownload />
          {loading ? "Gerando..." : "Baixar CV"}
        </>
      )}
    </PDFDownloadLink>
  );
}