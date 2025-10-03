export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
};
export const projectsData: Project[] = [
  {
    title: "LoteXpert",
    description:
      "Sistema de gerenciamento de lotes, com funcionalidades de cadastro, edição, gerenciamento, exclusão e busca. O sistema é responsivo, utiliza o framework Next.js para o frontend e o framework Tailwind CSS para o design.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Atmos",
    description:
      "Sistema de clima organizacional, com funcionalidades de cadastro, edição, gerenciamento, exclusão e busca. O sistema é responsivo, utiliza o framework Next.js para o frontend e o framework Tailwind CSS para o design, bibliotecas como Shadcn UI para componentes e React Hook Form para formulários.",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "Styled-Components", "API Rest"],
    liveUrl: "#",
  },
  {
    title: "Weather App",
    description:
      "Este projeto foi um desafio de design e interatividade, explorando animações complexas e um layout totalmente responsivo.",
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop",
    tags: ["Vite", "Three.js", "GSAP"],
    repoUrl: "#",
  },
  {
    title: "Timer App",
    description:
      "Um projeto mobile-first focado em acessibilidade e performance, garantindo uma experiência de usuário impecável em qualquer dispositivo.",
    image:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop",
    tags: ["React Native", "Expo", "Firebase"],
    liveUrl: "#",
  },
];
