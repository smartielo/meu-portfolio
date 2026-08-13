// src/components/layouts/CinematicSection.tsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

interface CinematicSectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export function CinematicSection({ id, className = "", children }: CinematicSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.96, 1, 1, 0.97]);
  const blurPx = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [6, 0, 0, 6]);
  const filter = useTransform(blurPx, (v) => `blur(${v}px)`);

  return (
    <motion.section
      id={id}
      ref={ref}
      className={className}
      style={reduced ? undefined : { opacity, scale, filter }}
    >
      {children}
    </motion.section>
  );
}
