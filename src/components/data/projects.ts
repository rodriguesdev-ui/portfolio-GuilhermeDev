
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
      title: "GitHub Portfolio",
      description:
        "Uma breve descrição sobre o projeto, os desafios enfrentados e as soluções implementadas. Destaque o objetivo principal.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
      liveUrl: "#", 
      repoUrl: "#",
    },
    {
      title: "ToDo List",
      description:
        "Outro projeto incrível onde utilizei tecnologias de ponta para resolver um problema real do cliente, focando em performance e UX.",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop",
      tags: ["React", "Styled-Components", "API Rest"],
      liveUrl: "#",
    },
    {
      title: "Weather App",
      description:
        "Este projeto foi um desafio de design e interatividade, explorando animações complexas e um layout totalmente responsivo.",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop",
      tags: ["Vite", "Three.js", "GSAP"],
      repoUrl: "#",
    },
    {
      title: "Timer App",
      description:
        "Um projeto mobile-first focado em acessibilidade e performance, garantindo uma experiência de usuário impecável em qualquer dispositivo.",
      image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop",
      tags: ["React Native", "Expo", "Firebase"],
      liveUrl: "#",
    },
  ];