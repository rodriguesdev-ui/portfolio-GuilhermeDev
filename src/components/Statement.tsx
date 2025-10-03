"use client";

import { motion, Variants } from "framer-motion";

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
        className="container mx-auto flex flex-col items-center gap-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-4"
        >
          <h2 className="max-w-4xl text-4xl font-medium tracking-tight text-white md:text-5xl">
            "A criatividade é a inteligência se divertindo"
          </h2>
          <p className="text-lg text-neutral-500">- Albert Einstein</p>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="max-w-2xl text-lg text-neutral-400"
        >
          A verdadeira inovação está em transformar ideias, criando experiências
          digitais que transmitam a essência de cada marca.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-12 w-full border-t border-neutral-800 pt-8"
        >
          <span className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            Projetos Recentes
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
