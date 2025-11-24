// src/components/sections/Projects.tsx
"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { profileData } from "@/data/profile";
import { ProjectCard } from "@/components/ui/ProjectCard";

// Importando estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";

export function Projects() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Título da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col md:flex-row justify-between items-end gap-4"
        >
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Projetos em Destaque <span className="text-blue-500">.</span>
            </h2>
            <p className="text-gray-400">
              Uma coleção dos meus melhores trabalhos em desenvolvimento e dados.
            </p>
          </div>
          
          {/* Botão de PDF (Placeholder - Vamos ativar na próxima etapa) */}
          <div id="resume-button-container">
             {/* O botão de download entrará aqui */}
          </div>
        </motion.div>

        {/* Carrossel Swiper */}
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
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12" // Padding bottom para as bolinhas da paginação
          >
            {profileData.projects.map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>
    </section>
  );
}