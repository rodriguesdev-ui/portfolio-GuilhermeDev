// src/components/About.tsx

"use client";

import { motion, Variants } from "framer-motion";
// 1. Importamos os ícones que vamos usar do lucide-react
import {
  Component,
  Code,
  PenTool,
  GitBranchPlus,
  Wind,
  Bot,
  Server,
  Move,
  Type,
  Orbit,
  PlayCircle,
  AppWindow,
} from "lucide-react";
import { LucideProps } from "lucide-react";
import React from "react";

// Definimos um tipo para os nossos componentes de ícone
type IconComponent = React.ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
>;

// 2. Nova estrutura de dados para as habilidades, agora com ícones do Lucide
const skills: { name: string; icon: IconComponent }[] = [
  { name: "HTML & CSS", icon: Code },
  { name: "JavaScript", icon: Component },
  { name: "TypeScript", icon: Type },
  { name: "React", icon: Orbit },
  { name: "Next.js", icon: Server },
  { name: "Tailwind CSS", icon: Wind },
  { name: "Framer Motion", icon: Move },
  { name: "GSAP", icon: PlayCircle },
  { name: "Node.js", icon: Bot },
  { name: "Git & GitHub", icon: GitBranchPlus },
  { name: "Figma", icon: PenTool },
  { name: "UX/UI Design", icon: AppWindow },
];

// Componente para a faixa do carrossel, agora com ícones
const SkillRow = ({
  subset,
  direction = "left",
}: {
  subset: typeof skills;
  direction?: "left" | "right";
}) => {
  const duplicatedSkills = [...subset, ...subset];

  const marqueeVariants: Variants = {
    animate: {
      x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40,
          ease: "linear",
        },
      },
    },
  };

  return (
    <motion.div className="flex" variants={marqueeVariants} animate="animate">
      {duplicatedSkills.map((skill, index) => (
        <div
          key={index}
          className="mx-4 flex shrink-0 items-center gap-3 rounded-full bg-neutral-900 px-5 py-3 text-base font-medium text-neutral-300"
        >
          <skill.icon className="h-6 w-6" />
          {skill.name}
        </div>
      ))}
    </motion.div>
  );
};

export function About() {
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Dividimos as habilidades em duas para as duas faixas do carrossel
  const firstHalf = skills.slice(0, Math.ceil(skills.length / 2));
  const secondHalf = skills.slice(Math.ceil(skills.length / 2));

  return (
    <section className="w-full overflow-hidden bg-black py-24 px-8 md:py-32">
      <div className="container mx-auto grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-8">
        {/* Coluna da Esquerda: Texto de Apresentação */}
        <motion.div
          className="flex flex-col gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h2
            variants={textVariants}
            className="text-4xl font-bold tracking-tight text-white md:text-5xl"
          >
            Um pouco sobre mim
          </motion.h2>
          <motion.p
            variants={textVariants}
            className="text-lg text-neutral-400"
          >
            Olá! Sou um desenvolvedor front-end apaixonado por criar interfaces
            que não são apenas bonitas, mas também intuitivas e performáticas. A
            minha jornada na programação começou com uma curiosidade sobre como
            as coisas funcionavam na web, e rapidamente se transformou numa
            carreira onde posso combinar criatividade com resolução de
            problemas.
          </motion.p>
        </motion.div>

        {/* Coluna da Direita: Carrossel de Habilidades */}
        <div className="relative flex w-full flex-col gap-4 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <SkillRow subset={firstHalf} direction="left" />
          <SkillRow subset={secondHalf} direction="right" />
        </div>
      </div>
    </section>
  );
}
