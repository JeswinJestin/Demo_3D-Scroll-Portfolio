"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Product & Growth Lead (Intern)",
    company: "Royal Edu Hub",
    location: "Kerala, India",
    date: "May 2025 – Jan 2026",
    bullets: [
      "Owned end-to-end rebuild from UX research via Figma to front-end execution using React and Spline 3D.",
      "Executed A/B testing and iterative UX improvements, driving a 3.2x organic impressions growth (5K to 16K+ monthly).",
      "Led AI workflow adoption, achieving a 40% efficiency gain and 50% faster content delivery for repeatable content assets."
    ]
  },
  {
    role: "Product Designer (Intern)",
    company: "Infinite FinCap",
    location: "Remote",
    date: "July 2025 – Sep 2025",
    bullets: [
      "Built a trust-first digital presence from zero, contributing to ₹40L+ portfolio visibility and a 30% rise in consultation requests.",
      "Collaborated with financial experts to translate complex services into streamlined digital experiences, fueling 12%+ annual growth.",
      "Automated user inquiry workflows, reducing response times by 50% and enhancing client co-ordination."
    ]
  },
  {
    role: "Event Director & Ops Lead",
    company: "TEDxSJCETPalai",
    location: "Kerala, India",
    date: "Aug 2024 – March 2025",
    bullets: [
      "Directed end-to-end execution, aligning curation, design, logistics, and ops teams under strict TEDx standards.",
      "Conducted outreach campaigns to secure high-profile speaker responses, directly increasing ticket demand and event credibility."
    ]
  }
];

export const ExperienceTimeline = () => {
  return (
    <section className="w-full px-6 py-24 md:px-12 lg:px-24 bg-black relative" id="experience">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tighter text-white mb-16 text-center"
        >
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Experience</span>
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative pl-6 md:pl-0"
            >
              {/* Timeline Indicator Line (mobile only) */}
              <div className="absolute left-0 top-2 bottom-[-48px] w-[1px] bg-white/10 md:hidden" />
              <div className="absolute left-[-4px] top-2 w-[9px] h-[9px] rounded-full bg-orange-500 md:hidden shadow-[0_0_10px_#f97316]" />

              <div className="md:grid flex flex-col md:grid-cols-4 gap-4 md:gap-8 items-start group">
                
                {/* Meta data */}
                <div className="col-span-1 flex flex-col pt-2 opacity-60 group-hover:opacity-100 transition-opacity">
                  <span className="text-white/60 text-sm tracking-wider uppercase mb-1">{exp.date}</span>
                  <span className="text-white/40 text-xs tracking-wider uppercase">{exp.location}</span>
                </div>

                {/* Content */}
                <div className="col-span-3 p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all backdrop-blur-sm shadow-xl">
                  <h3 className="text-2xl font-light text-white mb-1">{exp.role}</h3>
                  <h4 className="text-lg font-medium text-orange-400 mb-6">{exp.company}</h4>
                  
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="text-white/70 text-sm leading-relaxed flex items-start">
                        <span className="text-rose-500 mr-3 mt-1.5 leading-none">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
