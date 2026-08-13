// src/components/ui/ProjectModal.tsx
"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiX } from "react-icons/fi";
import { Project } from "@/data/profile";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

function slugify(title: string) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" || e.key.toLowerCase() === "q") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[150] flex items-center justify-center bg-background/85 p-4 backdrop-blur-md"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[85vh] w-full max-w-2xl overflow-y-auto border border-phosphor-green/25 bg-crt-panel shadow-[0_0_60px_-15px_rgba(0,255,157,0.4)]"
      >
        <div className="sticky top-0 flex items-center justify-between gap-2 border-b border-phosphor-green/10 bg-crt-panel px-4 py-2.5 font-mono text-xs text-phosphor-green/70">
          <span className="flex items-center gap-2">
            <span className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-phosphor-amber/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-phosphor-green/70" />
            </span>
            <span className="truncate">man ~/gabriel/projects/{slugify(project.title)}</span>
          </span>
          <button onClick={onClose} className="text-phosphor-green/60 hover:text-phosphor-amber" aria-label="Fechar">
            <FiX />
          </button>
        </div>

        <div className="space-y-6 p-6 font-mono text-sm md:p-8">
          <div>
            <p className="mb-1 text-xs uppercase tracking-widest text-phosphor-amber">NAME</p>
            <p className="text-lg font-bold text-phosphor-green">{project.title}</p>
          </div>

          <div>
            <p className="mb-1 text-xs uppercase tracking-widest text-phosphor-amber">DESCRIPTION</p>
            <p className="leading-relaxed text-foreground/80">{project.description}</p>
          </div>

          <div>
            <p className="mb-2 text-xs uppercase tracking-widest text-phosphor-amber">TAGS</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="border border-phosphor-green/20 bg-phosphor-green/5 px-2 py-1 text-xs text-phosphor-green">
                  [{tag}]
                </span>
              ))}
            </div>
          </div>

          {(project.repoLink || project.demoLink) && (
            <div>
              <p className="mb-2 text-xs uppercase tracking-widest text-phosphor-amber">SEE ALSO</p>
              <div className="flex flex-wrap gap-4">
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-phosphor-green hover:text-phosphor-amber"
                  >
                    <FiGithub /> [ code ]
                  </a>
                )}
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-phosphor-green hover:text-phosphor-amber"
                  >
                    <FiExternalLink /> [ demo ]
                  </a>
                )}
              </div>
            </div>
          )}

          <p className="border-t border-phosphor-green/10 pt-4 text-xs text-foreground/30">
            [ q ] ou [ esc ] para fechar
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
