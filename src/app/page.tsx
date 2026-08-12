import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { AiPlayground } from "@/components/sections/AiPlayground";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { EducationAchievements } from "@/components/sections/EducationAchievements";
import { TechNews } from "@/components/sections/TechNews";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      <Skills />
      <AiPlayground />
      <Experience />
      <Projects />
      <EducationAchievements />
      <TechNews />
      <Contact />
    </main>
  );
}
