"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";

interface TiltCardProps {
  title: string;
  description: string;
  year: string;
  index: number;
  image?: string;
}

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

export const TiltCard = ({ title, description, year, index, image }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useMotionTemplate`${xSpring}deg`;
  const rotateY = useMotionTemplate`${ySpring}deg`;

  // For the flashlight effect
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    const rX = ((mouseYPos / height) * ROTATION_RANGE - HALF_ROTATION_RANGE) * -1;
    const rY = (mouseXPos / width) * ROTATION_RANGE - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
    
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    // Move the glow far off canvas
    mouseX.set(-1000);
    mouseY.set(-1000);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ opacity: { duration: 0.8, delay: index * 0.1 }, y: { duration: 0.8, delay: index * 0.1 } }}
      className="group relative flex flex-col justify-between h-[400px] p-8 rounded-3xl overflow-hidden cursor-pointer bg-neutral-950/50 backdrop-blur-xl border border-white/10 [transform-style:preserve-3d] hover:border-white/20 transition-colors"
    >
      {/* Optional Background Image */}
      {image && (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-3xl">
          <Image src={image} alt={title} fill className="object-cover object-center opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 z-10" />
        </div>
      )}

      {/* 3D Depth Card Inner Element */}
      <div 
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none"
      >
        <div className="relative z-10 flex justify-between items-start">
          <span className="text-white/40 tracking-widest text-sm uppercase font-mono">{year}</span>
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/5 opacity-0 -translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <ArrowUpRight className="text-white w-5 h-5" />
          </div>
        </div>

        <div className="relative z-10 flex flex-col gap-3 transition-transform duration-500 group-hover:-translate-y-2">
          <h3 className="text-3xl font-light text-white tracking-tight">{title}</h3>
          <p className="text-white/50 font-light leading-relaxed text-sm md:text-base">{description}</p>
        </div>
      </div>

      {/* Dynamic Cursor Spotlight with Mix Blend Mode */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 mix-blend-overlay"
        style={{
           background: useMotionTemplate`
             radial-gradient(
               600px circle at ${mouseX}px ${mouseY}px,
               rgba(255, 255, 255, 0.25),
               transparent 40%
             )
           `,
        }}
      />
      {/* Subtle Border Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
           background: useMotionTemplate`
             radial-gradient(
               350px circle at ${mouseX}px ${mouseY}px,
               rgba(255, 255, 255, 0.4),
               transparent 40%
             )
           `,
           WebkitMaskImage: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
           WebkitMaskComposite: "xor",
           maskComposite: "exclude",
           padding: "1px",
        }}
      />
    </motion.div>
  );
};
