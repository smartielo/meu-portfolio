// src/components/sections/Projects.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { profileData, Project } from "@/data/profile";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { ContributionGraph } from "@/components/ui/ContributionGraph";
import { CinematicSection } from "@/components/layouts/CinematicSection";

// Importando estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <CinematicSection id="projects" className="relative overflow-hidden py-20">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col items-end justify-between gap-4 md:flex-row"
        >
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-phosphor-green">Trabalhos selecionados</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">Projetos em destaque</h2>
            <p className="mt-2 text-foreground/70">
              Uma coleção dos meus melhores trabalhos em desenvolvimento e dados.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <ContributionGraph />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 6500, disableOnInteraction: true, pauseOnMouseEnter: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {profileData.projects.map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectCard project={project} onOpen={() => setSelected(project)} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </CinematicSection>
  );
}
