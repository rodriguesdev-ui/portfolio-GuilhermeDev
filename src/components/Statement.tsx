"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

export function Statement() {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-black py-24 px-8 md:py-32">
      <motion.div
        className="container mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <div className="flex flex-row justify-center items-center">
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-medium tracking-tight text-white md:text-5xl"
          >
            "A criatividade é a inteligência se divertindo" - Albert Einstein
          </motion.h2>

          <div className="flex flex-col justify-between">
            <motion.p
              variants={itemVariants}
              className="max-w-xs self-start text-base text-neutral-400 md:self-end md:text-right"
            >
              A verdadeira inovação está em transformar ideias. Criando
              experiências digitais que transmitam a essência de cada marca.
            </motion.p>
          </div>
        </div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center mt-24 border-t border-neutral-800 pt-8"
        >
          <span className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            Projetos Recentes
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
