import { ScrollyCanvas } from "@/components/ScrollyCanvas";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/30 selection:text-white antialiased">
      <ScrollyCanvas />
      <Projects />
    </main>
  );
}
