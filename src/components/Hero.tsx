
"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, User } from "lucide-react";

import { Button } from "./ui/button";
import profilePic from "@/public/Guilherme.jpeg"; 

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function Hero() {
  return (
    <section className="flex h-screen flex-col bg-black text-white md:flex-row">
      
      <div className="flex w-full flex-col justify-center p-8 md:w-1/2 md:p-16 lg:p-24">
        <motion.div 
          className="flex flex-col items-start gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-3 py-1">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-neutral-300">
              Being innovative
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
              Rodrigues Dev
            </h1>
            <p className="text-lg text-neutral-400">
            Transformando ideias em interfaces digitais incríveis. Focado em
            criar experiências de usuário modernas, rápidas e acessíveis.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6">
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2 rounded-full border-2 border-neutral-700 bg-transparent cursor-pointer text-white transition-all duration-300 hover:border-white hover:gap-4"
            >
              <span>Veja meus projetos</span>
              <ArrowRight />
            </Button>
            
            <Link 
              href="/about" 
              className="inline-flex items-center gap-2 text-lg border-b-2 border-transparent text-neutral-400 transition-colors hover:text-white hover:border-white"
            >
              <span>Me conheça melhor</span>
              <User />
            </Link>
          </motion.div>
          
        </motion.div>
      </div>

      <motion.div 
        className="relative w-full md:w-1/2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
      >
        <Image
          src={profilePic}
          alt="Foto do desenvolvedor"
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>

    </section>
  );
}