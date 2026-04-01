"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Product & Strategy",
    items: ["Product Strategy", "Feature Prioritization", "A/B Testing", "Market Research", "Go-to-Market", "PRDs"]
  },
  {
    category: "Technical & UX",
    items: ["Python", "SQL", "React", "NextJS", "Figma", "Framer", "Usability Testing"]
  },
  {
    category: "Soft Skills",
    items: ["Story Telling", "Data-driven research", "Predictive Analysis", "Customer Empathy"]
  }
];

export const EducationSkills = () => {
  return (
    <section className="w-full px-6 py-24 md:px-12 lg:px-24 bg-black relative" id="education-skills">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Education Column */}
        <div className="lg:w-1/3 flex flex-col">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-light tracking-tighter text-white mb-8"
          >
            Education.
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl"
          >
            <span className="text-white/40 text-xs tracking-widest uppercase mb-2 block">Nov 2021 - June 2025</span>
            <h3 className="text-2xl font-light text-white mb-2">St. Joseph&apos;s College of Engineering and Technology</h3>
            <p className="text-blue-400 font-medium text-sm mb-4">Palai, Kerala</p>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Bachelor of Technology in Electronics and Computer Engineering.
            </p>
            <div className="bg-white/5 rounded-lg p-4 border border-white/5">
              <ul className="text-white/60 text-xs space-y-2">
                <li><span className="font-medium text-white/80">Minor:</span> Robotics and Automation</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Skills Column */}
        <div className="lg:w-2/3 flex flex-col">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-light tracking-tighter text-white mb-8"
          >
            Skills <span className="text-white/40">& Stack.</span>
          </motion.h2>

          <div className="space-y-8">
            {skills.map((skillGroup, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + (idx * 0.1) }}
              >
                <h3 className="text-white/70 tracking-wider uppercase text-sm mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((item, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/90 text-sm hover:bg-white/10 hover:border-white/20 transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
