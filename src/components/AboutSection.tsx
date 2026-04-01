"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const aboutDetails = [
  {
    title: "The Longer Story: Startup Experience",
    content: "I'm a PM Intern candidate with an Electronics and computer engineering background, hands-on experience shipping full-stack products across EdTech and FinTech, and a sharp obsession with how AI is reshaping the way products get built and distributed.\n\nAt Royal Edu Hub, diagnosed a completely broken website, took full ownership as the sole technical contributor, and rebuilt it from scratch in React with Spline 3D animations. I owned the product end-to-end - UX research, architecture, dev, launch, and post-launch iteration. Bounce rate significantly reduced, session engagement up, and organic impressions scaled from 5K to 16K+ monthly.\n\nAt Infinite Fin Cap, I built their first digital presence from zero - a responsive brand landing page designed to translate complex investment services into a trust-first experience. Drove 50% growth in search impressions within Q1 and established online visibility for a firm managing ₹40L+ in client portfolios."
  },
  {
    title: "Product Thinking in Practice",
    content: "I also built Medi Connect end-to-end: A cross-hospital unified health data platform integrating an AI chatbot and personalized diet planner, improving diagnosis efficiency by 30%. Presented it at NCIPETC-25, a national computing conference.\n\nI think in systems. I ask 'why does this metric move?' before 'what should we build next?' I've worked directly with founders, navigated ambiguity without a PM above me, and made product decisions with incomplete data."
  },
  {
    title: "My Current Focus",
    content: "Right now I'm going deep on AI-first product thinking, not just prompting but understanding how LLM-powered systems change activation funnels, retention loops, and monetization strategy. That's the space I want to work in and grow in.\n\nI'm focused on: AI Products · FinTech · Consumer Tech / Quick Commerce · B2C Platforms.\n\nCurrently enrolled in Product Space's PM program. Building in public on LinkedIn. If you're building something ambitious in AI or FinTech and need a PM who can think strategically AND execute technically - let's talk. \n\n📩 jeswinjestin203@gmail.com"
  }
];

export const AboutSection = () => {
  return (
    <section className="relative w-full px-6 py-24 md:px-12 lg:px-24 bg-black overflow-hidden" id="about">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-32 relative z-10">
        
        {/* Left Column - Heading & Image */}
        <div className="md:w-1/3 flex flex-col">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tighter text-white mb-8"
          >
            About <br /> <span className="text-white/40">Me.</span>
          </motion.h2>

          {/* Image Node */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden relative group shadow-2xl"
          >
            {/* The Image */}
            <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
              <span className="text-white/20 text-sm tracking-widest font-mono text-center px-4">
                [ Waiting for image at /public/images/about-thumbnail.png ]
              </span>
            </div>
            
            <Image 
              src="/images/about-thumbnail.png" 
              alt="Jeswin Thomas Jestin — Product Associate" 
              fill
              className="absolute inset-0 object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 z-10"
              onError={() => {}}
            />

            {/* Overlay Gradient for readability of the text badge */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20 pointer-events-none" />
            
            <div className="absolute bottom-6 left-6 right-6 z-30 transform transition-transform duration-500 group-hover:-translate-y-2">
              <p className="text-xs text-white/60 mb-1 uppercase tracking-wider font-medium">Current Focus</p>
              <p className="text-sm md:text-base text-white/90 font-light">Product Space AI PM Fellowship</p>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Content */}
        <div className="md:w-2/3 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-12"
          >
            <h3 className="text-blue-400 font-medium tracking-widest uppercase text-sm mb-4">Straight to point</h3>
            <p className="text-lg md:text-2xl lg:text-3xl text-white/90 leading-relaxed font-light">
              Hey! Jeswin here. I build products that work, from a blank Figma file to a live app, data-tracked experience. <span className="text-white font-medium">Two products shipped. Real metrics. Zero hand-holding.</span>
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            <Accordion type="single" collapsible className="w-full text-white">
              {aboutDetails.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left">{item.title}</AccordionTrigger>
                  <AccordionContent className="leading-relaxed whitespace-pre-wrap">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
