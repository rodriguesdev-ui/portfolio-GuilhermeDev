import { Hero } from "@/components/sections/home/Hero";
import { Projects } from "@/components/sections/projects/Projects";
import { Statement } from "@/components/sections/statement/Statement";
import { Process } from "@/components/sections/process/Process";
import { Footer } from "@/components/layout/Footer";
export default function Home() {
  return (
    <>
      <Hero />
      <Statement />
      <Projects />
      <Process />
      <Footer />
    </>
  );
}
