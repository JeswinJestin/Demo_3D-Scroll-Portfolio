"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  label: string;
}

export const SectionDivider = ({ label }: SectionDividerProps) => {
  return (
    <div className="relative w-full py-16 md:py-32 flex flex-col items-center justify-center bg-black overflow-hidden z-10">
      
      {/* Animated Vertical Line */}
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        whileInView={{ height: 80, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="w-[1px] bg-gradient-to-b from-transparent via-white/40 to-transparent mb-8"
      />

      {/* Label Text */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="text-white/40 uppercase tracking-[0.3em] text-xs font-light"
      >
        {label}
      </motion.div>

      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/[0.02] blur-[100px] rounded-full pointer-events-none" />
    </div>
  );
};
