import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { EducationAchievements } from "@/components/sections/EducationAchievements";

export const metadata = {
  title: "About Rahatutzaman Rizon | Full Stack Software Engineer",
  description:
    "Learn about Rahatutzaman Rizon's experience building multi-tenant ERP, CRM, SaaS, Shopify solutions, and AI automation systems.",
};

export default function AboutPage() {
  return (
    <div className="pt-10">
      <About />
      <Skills />
      <Experience />
      <EducationAchievements />
    </div>
  );
}
