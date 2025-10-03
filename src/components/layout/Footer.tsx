"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const formattedTime = now.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "America/Sao_Paulo",
      });
      setTime(formattedTime);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <footer className="w-full bg-black py-20 px-8 text-white">
      <motion.div
        className="container mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ staggerChildren: 0.3 }}
      >
        <div className="flex flex-col items-center text-center">
          <motion.a
            variants={textVariants}
            href="mailto:guilhermepc.dev@gmail.com"
            className="group text-4xl font-bold tracking-tight text-white transition-colors duration-300 hover:text-neutral-300 md:text-6xl"
          >
            Vamos criar algo incrível juntos?
            <span className="mt-2 block h-0.5 max-w-0 bg-white transition-all duration-500 ease-in-out group-hover:max-w-full"></span>
          </motion.a>
        </div>

        <motion.div
          variants={textVariants}
          className="mt-24 flex flex-col items-center justify-between gap-8 border-t border-neutral-800 pt-8 text-center sm:flex-row sm:text-left"
        >
          <div>
            <h4 className="text-xs uppercase tracking-widest text-neutral-600">
              Versão
            </h4>
            <p className="mt-1 text-sm text-neutral-400">
              &copy; {currentYear} Guilherme Rodrigues
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-neutral-600">
              Horário Local
            </h4>
            <p className="mt-1 font-mono text-sm text-neutral-400">{time}</p>
          </div>

          <div className="sm:text-right">
            <h4 className="text-xs uppercase tracking-widest text-neutral-600">
              Redes Sociais
            </h4>
            <div className="mt-1 flex items-center gap-4">
              <Link
                href="https://github.com/rodriguesdev-ui"
                target="_blank"
                className="text-sm text-neutral-400 transition-colors hover:text-white"
              >
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/guilherme-rodrigues-6bb04b244/"
                target="_blank"
                className="text-sm text-neutral-400 transition-colors hover:text-white"
              >
                LinkedIn
              </Link>
              <Link
                href="https://www.instagram.com/rodriguesg.dev/"
                target="_blank"
                className="text-sm text-neutral-400 transition-colors hover:text-white"
              >
                Instagram
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
