"use client";

import { motion } from "framer-motion";

export const Navbar = () => {
  const links = ["Work", "About", "Contact"];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-[100] px-6 py-6 md:px-12 flex justify-between items-center mix-blend-difference"
    >
      <div className="text-white font-semibold text-lg tracking-widest uppercase cursor-pointer">
        Jeswin
      </div>

      <nav className="hidden md:flex gap-8">
        {links.map((link, idx) => (
          <div key={idx} className="relative group cursor-pointer">
            <span className="text-white/70 hover:text-white transition-colors duration-300 text-sm tracking-widest font-light uppercase">
              {link}
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
          </div>
        ))}
      </nav>

      {/* Mobile Menu Button - Minimal Burger */}
      <div className="md:hidden flex flex-col gap-2 cursor-pointer p-2">
         <span className="w-6 h-[1px] bg-white block" />
         <span className="w-6 h-[1px] bg-white block" />
      </div>
    </motion.header>
  );
};
