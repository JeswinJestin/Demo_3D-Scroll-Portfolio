import { ScrollyCanvas } from "@/components/ScrollyCanvas";
import { Projects } from "@/components/Projects";
import { Navbar } from "@/components/Navbar";
import { SectionDivider } from "@/components/SectionDivider";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/30 selection:text-white antialiased">
      <Navbar />
      <ScrollyCanvas />
      <SectionDivider label="Selected Work" />
      <Projects />
    </main>
  );
}
