// src/app/page.tsx
import { Navbar } from "@/components/layouts/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Achievements } from "@/components/sections/Achievements";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Personal } from "@/components/sections/Personal";
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <main className="bg-background min-h-screen text-foreground">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Achievements />
      <About />
      <Personal />
      <Contact />
    </main>
  );
}