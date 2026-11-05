// src/components/ui/ProjectCard.tsx
"use client";

import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Project } from "@/data/profile";

interface ProjectCardProps {
  project: Project;
  onOpen?: () => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <div
      onClick={onOpen}
      role={onOpen ? "button" : undefined}
      tabIndex={onOpen ? 0 : undefined}
      onKeyDown={(e) => {
        if (onOpen && (e.key === "Enter" || e.key === " ")) onOpen();
      }}
      className="group relative h-[450px] w-full cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-crt-panel to-background shadow-2xl shadow-black/20 transition-all duration-500 hover:-translate-y-1 hover:border-phosphor-green/35 hover:shadow-[0_28px_80px_-36px_rgba(139,156,255,.45)]"
    >
      {/* 1. Imagem de Fundo */}
      <div className="absolute inset-0 h-full w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-phosphor-green/10 to-background opacity-20" />

        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          quality={72}
          className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-50"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      {/* 2. O Conteúdo */}
      <div
        className="absolute bottom-0 left-0 w-full translate-y-[20%] bg-gradient-to-t from-[#070a12] via-[#070a12]/95 to-transparent p-8 transition-transform duration-500 ease-out group-hover:translate-y-0"
      >
        <h3 className="mb-2 transform text-xl font-bold text-phosphor-green transition-transform duration-500 group-hover:-translate-y-2">
          {project.title}
        </h3>

        <div className="opacity-0 transition-opacity delay-100 duration-500 group-hover:opacity-100">
          <p className="mb-4 line-clamp-3 text-foreground/70">{project.description}</p>

          <div className="mb-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-foreground/70"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4 text-sm">
            {project.repoLink && (
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 text-phosphor-green transition-colors hover:text-phosphor-amber"
              >
                <FiGithub /> Código
              </a>
            )}

            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 text-phosphor-green transition-colors hover:text-phosphor-amber"
              >
                <FiExternalLink /> Ver projeto
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Dica visual adaptativa */}
      <div className="pointer-events-none absolute bottom-6 right-6 text-phosphor-green/55 transition-opacity duration-300 group-hover:opacity-0">
        <span className="flex items-center gap-1 text-sm font-medium">
          toque pra ler ↗
        </span>
      </div>
    </div>
  );
}
