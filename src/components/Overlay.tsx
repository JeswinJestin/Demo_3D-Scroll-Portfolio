"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export const Overlay = ({ scrollYProgress }: OverlayProps) => {
  // First section: 0% to 20% fade out, moves up
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);

  // Second section: fades in at 25%, peaks at 30%, fades out at 45%
  const x2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45], [-100, 0, 100]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45], [0, 1, 0]);

  // Third section: fades in at 50%, peaks at 60%, fades out at 80%
  const x3 = useTransform(scrollYProgress, [0.45, 0.6, 0.8], [100, 0, -100]);
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.6, 0.8], [0, 1, 0]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none p-6 md:p-12 lg:p-24 flex flex-col justify-center overflow-hidden">
      
      {/* 0% Section - Center */}
      <motion.div 
        style={{ y: y1, opacity: opacity1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] leading-[0.85] font-light tracking-tighter text-white mb-6">
           <span className="font-medium tracking-tight">Jeswin.</span><br />
           <span className="text-white/90">Creative Developer.</span>
        </h1>
        <p className="text-white/40 text-xs md:text-sm tracking-[0.4em] uppercase mt-12">
           Scroll to explore
        </p>
      </motion.div>

      {/* 30% Section - Left */}
      <motion.div 
        style={{ x: x2, opacity: opacity2 }}
        className="absolute inset-0 flex flex-col items-start justify-center pl-[6%] md:pl-[12%]"
      >
        <h2 className="text-5xl md:text-[6rem] lg:text-[7.5rem] leading-[0.9] font-light tracking-tighter text-white max-w-4xl">
           I build <br/> 
           <span className="font-normal bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 pb-4 block">
             digital experiences.
           </span>
        </h2>
      </motion.div>

      {/* 60% Section - Right */}
      <motion.div 
        style={{ x: x3, opacity: opacity3 }}
        className="absolute inset-0 flex flex-col items-end justify-center pr-[6%] md:pr-[12%] text-right"
      >
        <h2 className="text-5xl md:text-[6rem] lg:text-[7rem] leading-[0.9] font-light tracking-tighter text-white max-w-4xl">
           Bridging <br/>
           <span className="font-normal bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-rose-400 to-red-400 pb-4 block">
              design & engineering.
           </span>
        </h2>
      </motion.div>

    </div>
  );
};
