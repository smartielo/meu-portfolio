// src/components/sections/Personal.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { profileData } from "@/data/profile";
import { FiMusic, FiMonitor, FiActivity, FiUser } from "react-icons/fi";

export function Personal() {
  return (
    <section id="personal" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* COLUNA 1: Texto Sobre Mim */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }} 
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl h-full flex flex-col"
          >
            <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-6">
              <div className="p-3 bg-blue-600/20 rounded-xl text-blue-400">
                <FiUser size={24} />
              </div>
              <h2 className="text-3xl font-bold text-white">
                Quem sou eu <span className="text-blue-500">?</span>
              </h2>
            </div>
            
            <div className="prose prose-invert text-gray-300 leading-relaxed text-sm md:text-base space-y-6 text-justify flex-grow">
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
                Nesse momento, surgiu uma oportunidade de fazer um curso no Senac de "Desenvolvedor Full Stack", o qual abracei com todas as forças.
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
          </motion.div>

          {/* COLUNA 2: Hobbies + FOTO */}
          <div className="flex flex-col gap-6 h-full">
            
            {/* --- SEÇÃO DE HOBBIES --- */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900/50 border border-white/10 p-6 rounded-2xl hover:border-purple-500/50 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-4 text-purple-400">
                <FiMonitor size={20} />
                <h3 className="font-bold text-white">Games & Lazer</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {profileData.hobbies[0].items.map((game, i) => (
                  <span key={game} className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-sm text-purple-200 group-hover:bg-purple-500/20 transition-colors">
                    {game}
                  </span>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {/* Card de MÚSICA (Agora em Lista) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gray-900/50 border border-white/10 p-6 rounded-2xl hover:border-green-500/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4 text-green-400">
                  <FiMusic size={20} />
                  <h3 className="font-bold text-white">Música</h3>
                </div>
                
                {/* Lista padronizada com bolinhas verdes */}
                <ul className="text-sm text-gray-400 space-y-1">
                   {profileData.hobbies[1].items.map(music => (
                     <li key={music} className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
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
                className="bg-gray-900/50 border border-white/10 p-6 rounded-2xl hover:border-blue-500/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4 text-blue-400">
                  <FiActivity size={20} />
                  <h3 className="font-bold text-white">Esportes</h3>
                </div>
                <ul className="text-sm text-gray-400 space-y-1">
                   {profileData.hobbies[2].items.map(sport => (
                     <li key={sport} className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
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
               className="relative w-full flex-grow rounded-2xl overflow-hidden border border-white/10 shadow-2xl group min-h-[300px]"
            >
               <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
               
               <Image
                  src={profileData.personalImage || ""} 
                  alt="Gabriel Martielo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: '100%' }} 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                     e.currentTarget.style.display = "none";
                  }}
               />
               
               <div className="absolute inset-0 bg-gray-800 flex flex-col items-center justify-center -z-10 text-gray-500">
                  <FiUser size={48} />
                  <span className="text-sm mt-2">Adicione sua foto em public/me.jpg</span>
               </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}