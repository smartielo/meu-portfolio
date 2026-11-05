// src/components/sections/Personal.tsx
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { FiActivity, FiChevronLeft, FiChevronRight, FiMonitor, FiMusic, FiUser } from "react-icons/fi";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { NowPlaying } from "@/components/ui/NowPlaying";
import { CinematicSection } from "@/components/layouts/CinematicSection";

const storySlides = [
  {
    eyebrow: "Parte 01",
    title: "Origem e curiosidade",
    paragraphs: [
      "Além de linhas de código e commits, sou uma pessoa movida a desafios e criatividade. Acredito que o equilíbrio entre a vida profissional e pessoal é a chave para a alta performance.",
      "Sou natural de Agudos (SP), mas sempre morei em Bauru (SP). Cresci rodeado por tecnologia e inovação, o que despertou minha paixão por TI desde cedo. Meus pais sempre me incentivaram a explorar o mundo, praticar esportes e, principalmente, estudar muito.",
    ],
  },
  {
    eyebrow: "Parte 02",
    title: "Da Mecânica à tecnologia",
    paragraphs: [
      "Foi a partir desse incentivo que fui aprovado no CTI Bauru, uma escola técnica renomada nacionalmente. Cursei Técnico em Mecânica, concluí o ensino médio e técnico em 2022 e me lancei ao mercado de trabalho. Foi então que chegou um dos momentos mais importantes da minha carreira: a transição.",
      "Insatisfeito com a área de Mecânica, decidi mudar radicalmente minha trajetória profissional. Comecei a estudar Desenvolvimento Web de forma autodidata, inicialmente com foco em Front-end, e logo me interessei por Back-end e Data Science. No curso de Desenvolvedor Full Stack do Senac, trabalhei em projetos reais e consolidei minha paixão por desenvolvimento e dados.",
    ],
  },
  {
    eyebrow: "Parte 03",
    title: "Formação e identidade",
    paragraphs: [
      "Após concluir o curso, tive a certeza de que Desenvolvimento e Data Science eram minha verdadeira vocação. Fiz o Enem e fui aprovado no ProUni com uma bolsa integral em Ciência da Computação na Unisagrado de Bauru.",
      "Além da paixão por tecnologia e esportes, sou um entusiasta de música. Acredito que uma boa trilha sonora pode transformar qualquer momento, seja um dia de trabalho intenso ou uma sessão de jogos com amigos. Cresci ouvindo diferentes gêneros, de Bee Gees a Henrique e Juliano, de Raul Seixas a Alok, o que ampliou meu horizonte cultural e ajudou a desenvolver uma mente aberta e criativa.",
      "Quando não estou no VS Code, você provavelmente vai me encontrar imerso em algum jogo competitivo, ouvindo uma boa playlist para relaxar ou cuidando da saúde por meio dos esportes.",
    ],
  },
];

export function Personal() {
  const [storySlide, setStorySlide] = useState(0);

  const changeStorySlide = (direction: -1 | 1) => {
    setStorySlide((current) => (current + direction + storySlides.length) % storySlides.length);
  };

  return (
    <CinematicSection id="personal" className="relative overflow-hidden py-20 sm:py-24">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          {/* COLUNA 1: Texto Sobre Mim */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <TerminalWindow path="~/gabriel/personal" title="minha_historia">
              <div className="mb-6 flex items-start justify-between gap-4 border-b border-phosphor-green/10 pb-5">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="shrink-0 rounded-xl border border-phosphor-green/10 bg-phosphor-green/10 p-3 text-phosphor-green">
                    <FiUser size={22} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/40">Minha trajetória</p>
                    <h2 className="font-mono text-xl font-bold text-phosphor-green sm:text-2xl">Quem sou eu?</h2>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <button
                    type="button"
                    onClick={() => changeStorySlide(-1)}
                    aria-label="Voltar uma parte da história"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground/60 transition hover:border-phosphor-green/40 hover:text-white"
                  >
                    <FiChevronLeft />
                  </button>
                  <button
                    type="button"
                    onClick={() => changeStorySlide(1)}
                    aria-label="Avançar uma parte da história"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground/60 transition hover:border-phosphor-green/40 hover:text-white"
                  >
                    <FiChevronRight />
                  </button>
                </div>
              </div>

              <div className="min-h-[30rem] sm:min-h-[27rem] lg:min-h-[25rem]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={storySlide}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-phosphor-amber">
                      {storySlides[storySlide].eyebrow}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">{storySlides[storySlide].title}</h3>
                    <div className="mt-6 space-y-5 text-sm leading-relaxed text-foreground/75 sm:text-base">
                      {storySlides[storySlide].paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-4">
                <div className="flex gap-2" aria-label={`Parte ${storySlide + 1} de ${storySlides.length}`}>
                  {storySlides.map((slide, index) => (
                    <button
                      key={slide.title}
                      type="button"
                      onClick={() => setStorySlide(index)}
                      aria-label={`Abrir ${slide.eyebrow.toLowerCase()} da história`}
                      aria-current={storySlide === index ? "step" : undefined}
                      className={`h-1.5 rounded-full transition-all ${storySlide === index ? "w-8 bg-phosphor-green" : "w-3 bg-white/15 hover:bg-white/30"}`}
                    />
                  ))}
                </div>
                <span className="font-mono text-xs tabular-nums text-foreground/35">0{storySlide + 1} / 0{storySlides.length}</span>
              </div>
            </TerminalWindow>
          </motion.div>

          {/* COLUNA 2: Hobbies + Spotify */}
          <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:gap-6">
            {/* --- SEÇÃO DE HOBBIES --- */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group rounded-2xl border border-phosphor-green/15 bg-crt-panel/40 p-5 font-mono transition-colors hover:border-phosphor-green/40 sm:p-6"
            >
              <div className="mb-4 flex items-center gap-3 text-phosphor-green">
                <FiMonitor size={18} />
                <h3 className="font-bold">Games & Lazer</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {profileData.hobbies[0].items.map((game) => (
                  <span
                    key={game}
                    className="border border-phosphor-green/15 bg-black/20 px-2.5 py-1 text-sm text-foreground/70 transition-colors group-hover:border-phosphor-green/30"
                  >
                    [{game}]
                  </span>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-4 font-mono sm:grid-cols-2 sm:gap-6">
              {/* Card de MÚSICA */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl border border-phosphor-green/15 bg-crt-panel/40 p-5 transition-colors hover:border-phosphor-amber/40 sm:p-6"
              >
                <div className="mb-4 flex items-center gap-3 text-phosphor-amber">
                  <FiMusic size={18} />
                  <h3 className="font-bold">Música</h3>
                </div>

                <ul className="space-y-1 text-sm text-foreground/70">
                  {profileData.hobbies[1].items.map((music) => (
                    <li key={music} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-phosphor-amber" />
                      {music}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Card de ESPORTES */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-2xl border border-phosphor-green/15 bg-crt-panel/40 p-5 transition-colors hover:border-phosphor-green/40 sm:p-6"
              >
                <div className="mb-4 flex items-center gap-3 text-phosphor-green">
                  <FiActivity size={18} />
                  <h3 className="font-bold">Esportes</h3>
                </div>
                <ul className="space-y-1 text-sm text-foreground/70">
                  {profileData.hobbies[2].items.map((sport) => (
                    <li key={sport} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-phosphor-green" />
                      {sport}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* --- SPOTIFY --- */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="w-full"
            >
              <NowPlaying />
            </motion.div>
          </div>
        </div>
      </div>
    </CinematicSection>
  );
}
