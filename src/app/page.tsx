// src/app/page.tsx
import { Navbar } from "@/components/layouts/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <main className="bg-gray-950 min-h-screen text-white">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />

      {/* Espaço temporário para testar o scroll da Navbar */}
      <div className="h-[1000px] flex items-center justify-center text-gray-600">
        <p>Role para baixo para ver o efeito da Navbar...</p>
      </div>
    </main>
  );
}