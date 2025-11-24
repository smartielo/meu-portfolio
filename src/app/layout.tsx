// src/app/layout.tsx
import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Importando a fonte
import "./globals.css";

// Configuração da fonte
const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"], // Pesos que vamos usar
});

export const metadata: Metadata = {
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
        url: "/og-image.jpg", // Vamos criar essa imagem no passo abaixo
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
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${montserrat.variable} font-sans bg-gray-950 text-white antialiased`}>
        {/* O 'bg-gray-950' define o fundo escuro padrão do site */}
        {children}
      </body>
    </html>
  );
}