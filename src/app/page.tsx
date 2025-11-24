// src/app/page.tsx
import { Navbar } from "@/components/layouts/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <main className="bg-gray-950 min-h-screen text-white">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <div className="h-[1000px] flex items-center justify-center text-gray-600">
        <p>Role para baixo para ver o efeito da Navbar...</p>
      </div>
    </main>
  );
}