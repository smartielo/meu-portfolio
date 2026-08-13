// src/components/sections/Personal.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { profileData } from "@/data/profile";
import { FiMusic, FiMonitor, FiActivity, FiUser } from "react-icons/fi";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { CinematicSection } from "@/components/layouts/CinematicSection";

export function Personal() {
  return (
    <CinematicSection id="personal" className="relative overflow-hidden py-24">
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-2">
          {/* COLUNA 1: Texto Sobre Mim */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="h-full"
          >
            <TerminalWindow path="~/gabriel/personal" title="whoami --verbose" className="flex h-full flex-col">
              <div className="mb-6 flex items-center gap-3 border-b border-phosphor-green/10 pb-6">
                <div className="rounded border border-phosphor-green/10 bg-phosphor-green/10 p-3 text-phosphor-green">
                  <FiUser size={22} />
                </div>
                <h2 className="font-mono text-2xl font-bold text-phosphor-green">Quem sou eu?</h2>
              </div>

              <div className="flex-grow space-y-6 text-sm leading-relaxed text-foreground/80 md:text-base">
                <p>
                  Além de linhas de código e commits, sou uma pessoa movida a desafios e criatividade.
                  Acredito que o equilíbrio entre a vida profissional e pessoal é a chave para a alta performance.
                </p>
                <p>
                  Sou natural de Agudos (SP), mas sempre morei em Bauru (SP). Cresci rodeado por tecnologia e inovação,
                  o que despertou minha paixão por TI desde cedo. Meus pais sempre me incentivaram a explorar o mundo, sempre me incentivaram a praticar esportes e principalmente, estudar MUITO.
                </p>
                <p>
                  Foi a partir desse incentivo que fui aprovado no CTI Bauru, uma escola técnica renomada nacionalmente, considerada a melhor escola pública do estado de São Paulo, dentre as melhores no geral, e perfomando dentre as melhores do país.
                  Porém, cursei uma área completamente diferente da que atuo hoje: Técnico em Mecânica.
                  Terminei o ensino médio e técnico em 2022, e me lancei ao mercado de trabalho, mas então chegou uns dos momentos mais importantes da minha carreira: a transição.
                </p>
                <p>
                  Estava extremamente insatisfeito com a área de Mecânica, e decidi mudar radicalmente minha trajetória profissional.
                  Comecei a estudar Desenvolvimento Web de forma autodidata, focando em Front-end inicialmente, mas logo me interessei por Back-end e Data Science.
                  Nesse momento, surgiu uma oportunidade de fazer um curso no Senac de &quot;Desenvolvedor Full Stack&quot;, o qual abracei com todas as forças.
                  Durante o curso, tive a chance de trabalhar em projetos reais, o que me proporcionou uma experiência valiosa e consolidou minha paixão por desenvolvimento e dados.
                </p>
                <p>
                  Após concluir o curso, tive a certeza que o Desenvolvimento e Data Science eram minha verdadeira vocação.
                  Fiz o Enem nesse mesmo ano, e fui aprovado no ProUni com uma bolsa integral em Ciência da Computação na Unisagrado de Bauru, onde estou atualmente no 2º semestre.
                </p>
                <p>
                  Além da paixão por tecnologia e esportes, sou um entusiasta de música. Acredito que uma boa trilha sonora pode transformar qualquer momento, seja um dia de trabalho intenso ou uma sessão de jogos com amigos.
                  Cresci ouvindo diversos gêneros musicais, desde Bee Gees até Henrique e Juliano, desde Raul Seixas até Alok, o que ampliou meu horizonte cultural e me ajudou a desenvolver uma mente aberta e criativa.
                </p>
                <p>
                  Quando não estou no VS Code, você provavelmente vai me encontrar imerso em algum jogo competitivo,
                  ouvindo uma boa playlist para relaxar ou cuidando da saúde física através dos esportes.
                </p>
              </div>
            </TerminalWindow>
          </motion.div>

          {/* COLUNA 2: Hobbies + FOTO */}
          <div className="flex h-full flex-col gap-6">
            {/* --- SEÇÃO DE HOBBIES --- */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className="group border border-phosphor-green/15 bg-crt-panel/40 p-6 font-mono transition-colors hover:border-phosphor-green/40"
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

            <div className="grid grid-cols-2 gap-6 font-mono">
              {/* Card de MÚSICA */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="border border-phosphor-green/15 bg-crt-panel/40 p-6 transition-colors hover:border-phosphor-amber/40"
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
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="border border-phosphor-green/15 bg-crt-panel/40 p-6 transition-colors hover:border-phosphor-green/40"
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

            {/* --- SEÇÃO: FOTO PESSOAL --- */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative min-h-[300px] w-full flex-grow overflow-hidden border border-phosphor-green/15 shadow-2xl"
            >
              <div className="absolute inset-0 z-10 transition-colors duration-500 group-hover:bg-transparent" />

              <Image
                src={profileData.personalImage || ""}
                alt="Gabriel Martielo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center bg-crt-panel text-phosphor-green/30">
                <FiUser size={48} />
                <span className="mt-2 font-mono text-sm">Adicione sua foto em public/me.jpg</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </CinematicSection>
  );
}
