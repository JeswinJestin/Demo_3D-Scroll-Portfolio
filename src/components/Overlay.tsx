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
    <div className="absolute inset-0 z-10 pointer-events-none p-6 md:p-24 flex flex-col justify-center overflow-hidden">
      
      {/* 0% Section - Center */}
      <motion.div 
        style={{ y: y1, opacity: opacity1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-4xl md:text-7xl font-light tracking-tighter text-white mb-2">
           <span className="font-semibold">Jeswin.</span> Creative Developer.
        </h1>
        <p className="text-white/60 text-lg md:text-2xl font-light tracking-wide mt-4">
           Scroll to explore
        </p>
      </motion.div>

      {/* 30% Section - Left */}
      <motion.div 
        style={{ x: x2, opacity: opacity2 }}
        className="absolute inset-0 flex flex-col items-start justify-center pl-[5%] md:pl-[10%]"
      >
        <h2 className="text-3xl md:text-6xl font-light tracking-tight text-white max-w-xl">
           I build <br/> 
           <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
             digital experiences.
           </span>
        </h2>
      </motion.div>

      {/* 60% Section - Right */}
      <motion.div 
        style={{ x: x3, opacity: opacity3 }}
        className="absolute inset-0 flex flex-col items-end justify-center pr-[5%] md:pr-[10%] text-right"
      >
        <h2 className="text-3xl md:text-6xl font-light tracking-tight text-white max-w-xl">
           Bridging <br/>
           <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400">
              design and engineering.
           </span>
        </h2>
      </motion.div>

    </div>
  );
};
