import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, Globe, MessageCircle, Instagram } from "lucide-react";

// Dados dos links (Você pode mover para um arquivo separado depois se quiser)
const links = [
  {
    title: "Portfólio Oficial",
    url: "/", // Volta para a home do site
    icon: Globe,
    color: "bg-blue-500",
  },
  {
    title: "Fale comigo no WhatsApp",
    url: "https://wa.me/5514999999999", // Coloque seu número real aqui
    icon: MessageCircle,
    color: "bg-green-500",
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/in/seu-linkedin",
    icon: Linkedin,
    color: "bg-blue-700",
  },
  {
    title: "GitHub",
    url: "https://github.com/seu-github",
    icon: Github,
    color: "bg-gray-800",
  },
  {
    title: "Instagram",
    url: "https://instagram.com/seu-insta",
    icon: Instagram,
    color: "bg-pink-600",
  },
];

export default function LinksPage() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background com Efeitos de Luz (Orbs) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Container Principal (Glass Effect) */}
      <div className="z-10 w-full max-w-md flex flex-col items-center gap-6">
        
        {/* Foto de Perfil */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-900">
            <Image
              src="/projects/perfillinks.jpg" // Certifique-se que essa imagem existe ou use a do GitHub
              alt="Gabriel Martielo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Textos */}
        <div className="text-center space-y-2 mb-4">
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Gabriel Martielo
          </h1>
          <p className="text-gray-400 text-sm font-medium px-4 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm inline-block">
            Estudante de Ciência da Computação 💻 | Full Stack Dev 🚀 | Iniciante em Data Science 🧮
          </p>
        </div>

        {/* Lista de Links */}
        <div className="w-full flex flex-col gap-4">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              target={link.url.startsWith("/") ? "_self" : "_blank"}
              className="group relative w-full p-4 flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98]"
            >
              {/* Ícone com fundo colorido sutil */}
              <div className={`p-2 rounded-lg ${link.color} bg-opacity-20 text-white group-hover:scale-110 transition-transform`}>
                <link.icon size={20} />
              </div>
              
              {/* Texto */}
              <span className="font-medium text-gray-200 group-hover:text-white transition-colors">
                {link.title}
              </span>

              {/* Seta discreta no final */}
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 text-gray-400">
                →
              </div>
            </Link>
          ))}
        </div>

        {/* Footerzinho simples */}
        <footer className="mt-12 text-gray-500 text-xs text-center">
          <p>© 2026 Gabriel Martielo</p>
          <p className="mt-1">Feito com Next.js & Tailwind</p>
        </footer>

      </div>
    </main>
  );
}