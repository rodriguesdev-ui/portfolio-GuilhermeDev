"use client";

import Image from "next/image";
import { processData, ProcessStep } from "@/components/data/process";
import { AnimatedArrow } from "@/components/AnimatedArow";

const ProcessCard = ({ step, title, description, image }: ProcessStep) => {
  return (
    <div className="group relative h-96 w-full cursor-pointer overflow-hidden rounded-lg">
      <Image
        src={image}
        alt={`Imagem do processo: ${title}`}
        fill
        className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative flex h-full flex-col justify-between p-8 text-white">
        <div className="flex flex-col">
          <p className="mb-2 text-sm uppercase tracking-widest text-neutral-400">
            Fase {step}
          </p>
          <h3 className="text-3xl font-bold">{title}</h3>
          <p className="mt-2 text-lg text-neutral-300">{description}</p>
        </div>

        <div className="flex items-center gap-2 text-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span>Ver detalhes</span>
          <AnimatedArrow />
        </div>
      </div>
    </div>
  );
};

export function Process() {
  return (
    <section className="w-full bg-black py-24 px-8 md:py-32">
      <div className="container mx-auto">
        <h2 className="mb-16 text-center text-sm uppercase tracking-[0.2em] text-neutral-500 md:text-5xl">
          Processo de Criação
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {processData.map((step: ProcessStep) => (
            <ProcessCard key={step.step} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
