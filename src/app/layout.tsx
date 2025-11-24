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
  title: "Portfólio | Gabriel M.",
  description: "Desenvolvedor Full Stack e Estudante de Ciência da Computação",
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