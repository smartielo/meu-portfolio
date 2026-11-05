"use client";

import { FiDownload } from "react-icons/fi";

export function DownloadResume() {
  return (
    <a
      id="download-resume-trigger"
      href="/api/resume"
      download="Curriculo_Gabriel_Martielo.pdf"
      className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-background transition-all hover:-translate-y-0.5 hover:bg-phosphor-green"
    >
      <FiDownload />
      Baixar CV
    </a>
  );
}
