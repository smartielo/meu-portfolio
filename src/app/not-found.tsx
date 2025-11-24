// src/app/not-found.tsx
import Link from "next/link";
import { FiHome, FiAlertTriangle } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-950 text-white px-4 text-center">
      
      {/* Ícone Animado */}
      <div className="mb-8 p-6 bg-white/5 rounded-full border border-white/10 backdrop-blur-md animate-pulse">
        <FiAlertTriangle className="text-6xl text-yellow-500" />
      </div>

      <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        404
      </h1>
      
      <h2 className="text-2xl font-semibold mb-4">Página não encontrada</h2>
      
      <p className="text-gray-400 mb-8 max-w-md">
        Ops! Parece que você se perdeu no ciberespaço. A página que você está procurando não existe ou foi movida.
      </p>

      <Link
        href="/"
        className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 font-semibold text-white hover:bg-blue-700 transition-all hover:scale-105"
      >
        <FiHome />
        Voltar para o Início
      </Link>
    </div>
  );
}