// src/components/ui/ProjectCard.tsx
"use client";

import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Project } from "@/data/profile";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative h-[450px] w-full overflow-hidden rounded-3xl bg-gray-900 shadow-xl cursor-default">
      
      {/* 1. Imagem de Fundo (Com efeito de Zoom no Hover) */}
      <div className="absolute inset-0 h-full w-full">
        {/* Usando uma div de cor caso a imagem falhe ou não exista ainda */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-gray-900 opacity-50" />
        
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-50"
          // Adicionei um placeholder caso você não tenha imagens ainda
          onError={(e) => {
            // Lógica simples para fallback visual (opcional)
            e.currentTarget.style.display = "none"; 
          }}
        />
      </div>

      {/* 2. O Conteúdo (Desliza de baixo para cima) */}
      <div 
        className="absolute bottom-0 left-0 w-full p-8 
                   bg-gradient-to-t from-black via-black/90 to-transparent
                   transform translate-y-[20%] group-hover:translate-y-0 
                   transition-transform duration-500 ease-out"
      >
        {/* Título (Sempre visível, mas sobe no hover) */}
        <h3 className="text-2xl font-bold text-white mb-2 transform group-hover:-translate-y-2 transition-transform duration-500">
          {project.title}
        </h3>

        {/* Descrição e Tags (Aparecem no hover) */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          <p className="text-gray-300 mb-4 line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-2 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Botões de Ação */}
          <div className="flex gap-4">
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
            >
              <FiGithub /> Repo
            </a>
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white text-white hover:bg-white/10 transition-colors"
              >
                <FiExternalLink /> Demo
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Pequena dica visual para mostrar que tem algo escondido */}
      <div className="absolute bottom-6 right-6 text-white/50 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
        <span className="text-sm font-medium flex items-center gap-1">
          {/* Texto para Mobile (aparece por padrão, some em telas md) */}
          <span className="md:hidden">Toque para ver</span>
          
          {/* Texto para Desktop (escondido por padrão, aparece em telas md) */}
          <span className="hidden md:inline">Passar o mouse</span>
           ↗
        </span>
      </div>
    </div>
  );
}