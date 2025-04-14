// src/sections/Hero.tsx
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/pixar-avatar.png"; // ajuste o nome conforme sua imagem

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl w-full">
        {/* Imagem */}
        <motion.img
          src={profileImg}
          alt="Gabriel Avatar"
          className="w-56 md:w-72 rounded-full shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Texto */}
        <motion.div
          className="text-center md:text-left space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
            Olá! Sou Gabriel 👋
          </h1>
          <p className="text-lg md:text-xl text-blue-700">
            Desenvolvedor Full Stack apaixonado por front-end, React e interfaces modernas.
          </p>
          <Button
            className="mt-4 text-white bg-blue-600 hover:bg-blue-700"
            onClick={() =>
              document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Saiba mais
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
