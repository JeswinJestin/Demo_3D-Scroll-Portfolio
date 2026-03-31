"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Ethereal Interfaces",
    description: "Next-gen spatial UI explorations using WebGL and Framer Motion.",
    year: "2024",
  },
  {
    title: "Synapse Protocol",
    description: "High performance fintech dashboard processing real-time websockets.",
    year: "2023",
  },
  {
    title: "Aura Design System",
    description: "Multi-platform design system with fluid typography and dynamic theming.",
    year: "2023",
  },
  {
    title: "Lumina Studio",
    description: "Award-winning creative agency portfolio with immersive 3D scroll.",
    year: "2022",
  },
];

export const Projects = () => {
  return (
    <section className="relative z-10 bg-black min-h-screen py-32 px-6 md:px-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-4xl md:text-7xl font-light tracking-tighter text-white">
            Selected Works
          </h2>
          <p className="text-white/50 text-xl font-light max-w-2xl">
            A diverse collection of digital products and creative developments designed to leave a lasting impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              className="group relative flex flex-col justify-between h-[400px] p-8 rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Glassmorphism Background & Border */}
              <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-white/20" />
              
              {/* Subtle Glow Effect via pseudo-element on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none 
                              bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />

              <div className="relative z-10 flex justify-between items-start">
                <span className="text-white/40 tracking-widest text-sm uppercase">{project.year}</span>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/5 opacity-0 -translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <ArrowUpRight className="text-white w-5 h-5" />
                </div>
              </div>

              <div className="relative z-10 flex flex-col gap-2 transition-transform duration-500 group-hover:-translate-y-4">
                <h3 className="text-3xl font-light text-white tracking-tight">{project.title}</h3>
                <p className="text-white/60 font-light leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
