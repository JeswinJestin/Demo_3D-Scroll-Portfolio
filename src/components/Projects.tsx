"use client";

import { TiltCard } from "./TiltCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "MediConnect",
    description: "Unified AI health platform solving fragmented patient data. Cross-hospital app with AI chatbot; presented at NCIPETC-25.",
    year: "2024",
    image: "/images/project-mediconnect.png"
  },
  {
    title: "Onset",
    description: "FinTech product case study targeting investor decision overload. Built a 5-step goal-to-risk investment flow.",
    year: "2024",
    image: "/images/project-onset.png"
  },
  {
    title: "Revive",
    description: "End-to-end UX research and design system for a cardiac wearable wristband, featuring luxury minimalist UI.",
    year: "2024",
    image: "/images/project-revive.jpg"
  },
  {
    title: "Royal Edu Hub",
    description: "Owned the end-to-end platform rebuild and A/B testing driving 3.2x organic impressions growth.",
    year: "2025",
    image: "/images/project-royaleduhub.png"
  },
];

export const Projects = () => {
  return (
    <section id="work" className="relative z-10 bg-black min-h-screen py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-white/10">
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
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
