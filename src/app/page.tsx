import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Research } from "@/components/Research";
import { EngineeringPhilosophy } from "@/components/EngineeringPhilosophy";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects />
      <Experience />
      <Skills />
      <Research />
      <EngineeringPhilosophy />
      <Contact />
    </>
  );
}
