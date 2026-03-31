import { ScrollyCanvas } from "@/components/ScrollyCanvas";
import { Projects } from "@/components/Projects";
import { Navbar } from "@/components/Navbar";
import { SectionDivider } from "@/components/SectionDivider";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { EducationSkills } from "@/components/EducationSkills";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/30 selection:text-white antialiased">
      <Navbar />
      <ScrollyCanvas />
      
      <SectionDivider label="About" />
      <AboutSection />
      
      <SectionDivider label="Experience" />
      <ExperienceTimeline />
      
      <SectionDivider label="Selected Work" />
      <Projects />
      
      <SectionDivider label="Education & Skills" />
      <EducationSkills />

      <Footer />
    </main>
  );
}
