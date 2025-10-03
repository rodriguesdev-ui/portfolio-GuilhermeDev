import searchImage from "../../public/searchImage.png";
import designImage from "../../public/desginImageProcess.avif";
import codeImage from "../../public/codingImage.jpg";
import launchImage from "../../public/lancamentoOtimizado.avif";
import { StaticImageData } from "next/image";

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  image: string | StaticImageData;
};

export const processData: ProcessStep[] = [
  {
    step: "01",
    title: "Pesquisa & Descoberta",
    description:
      "Análise de requisitos, definição de objetivos e planeamento estratégico do projeto.",
    image: searchImage,
  },
  {
    step: "02",
    title: "Design & Prototipagem",
    description:
      "Criação de wireframes, design de interface (UI) e experiência do utilizador (UX).",
    image: designImage,
  },
  {
    step: "03",
    title: "Desenvolvimento & Código",
    description:
      "Transformação do design em código limpo, semântico e responsivo.",
    image: codeImage,
  },
  {
    step: "04",
    title: "Lançamento & Otimização",
    description:
      "Implementação, testes finais e otimização contínua para performance.",
    image: launchImage,
  },
];
