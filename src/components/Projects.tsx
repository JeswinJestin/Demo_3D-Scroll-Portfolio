"use client";

import { TiltCard } from "./TiltCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Royal EduHub",
    description: "Led iterative design improvements and enhanced SEO/UX for EdTech platform. Increased user engagement by 60%.",
    year: "2025",
  },
  {
    title: "Infinite FinCap",
    description: "Product Associate Intern managing end-to-end frontend initiatives for a FinTech platform, streamlining workflows.",
    year: "2024",
  },
  {
    title: "MediConnect",
    description: "AI Health Platform presented at NCIPETC-25. Built cohesive UX mapping for complex healthcare data.",
    year: "2024",
  },
  {
    title: "Product Space AI",
    description: "AI Product Management Fellowship. Developing strategic product solutions leveraging modern AI tools.",
    year: "2024",
  },
];

export const Projects = () => {
  return (
    <section className="relative z-10 bg-black min-h-screen py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-5xl md:text-7xl lg:text-[7rem] leading-[0.9] font-light tracking-tighter text-white">
            Product <br className="hidden md:block"/>Experience.
          </h2>
          <p className="text-white/40 text-lg md:text-xl font-light max-w-xl leading-relaxed">
            Delivering end-to-end product ownership with a focus on user-centric design, engineering, and data-driven iteration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <TiltCard 
              key={idx}
              index={idx}
              title={project.title}
              description={project.description}
              year={project.year}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
