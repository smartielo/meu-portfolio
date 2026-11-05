// src/app/layout.tsx
import type { Metadata } from "next";
import { Montserrat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ScrollToTop } from "../components/ui/ScrollToTop";
import { ShareFloating } from "../components/ui/ShareFloating";
import { CommandPaletteProvider } from "@/components/providers/CommandPaletteProvider";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { SectionDock } from "@/components/layouts/SectionDock";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gabrielmartielo.com.br'),
  title: "Gabriel Martielo | Full Stack & Dados",
  description: "Portfólio de Gabriel Martielo. Desenvolvedor Full Stack e Estudante de Ciência da Computação, focado em React, Next.js, Python e Soluções de Dados.",
  keywords: ["Gabriel Martielo", "Full Stack", "Desenvolvedor", "React", "Next.js", "Ciência de Dados", "Portfólio"],
  authors: [{ name: "Gabriel Martielo", url: "https://dev.gabrielmartielo.com.br" }],
  openGraph: {
    title: "Gabriel Martielo | Full Stack & Dados",
    description: "Confira meus projetos, setup e baixe meu currículo atualizado.",
    url: "https://dev.gabrielmartielo.com.br",
    siteName: "Portfólio Gabriel Martielo",
    images: [
      {
        url: "/projects/og-image.png", // Vamos criar essa imagem no passo abaixo
        width: 1200,
        height: 630,
        alt: "Gabriel Martielo Portfólio Cover",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} ${jetbrainsMono.variable} font-sans bg-background text-foreground antialiased`}>
        <div className="noise-overlay fixed inset-0 z-[1] pointer-events-none" aria-hidden />
        <CommandPaletteProvider>
          {children}
          <SectionDock />
          <CommandPalette />
        </CommandPaletteProvider>
        <ShareFloating />        {/* Botão de Compartilhar (Canto esquerdo) */}
        <ScrollToTop />          {/* Botão de Subir (Canto direito) */}
        <Analytics />
      </body>
    </html>
  );
}
