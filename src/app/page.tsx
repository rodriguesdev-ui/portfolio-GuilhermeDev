import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Statement } from "@/components/Statement";
import { Process } from "@/components/Process";
import { Footer } from "@/components/Footer";
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
