"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export const Overlay = ({ scrollYProgress }: OverlayProps) => {
  // First section: 0% to 12% fade out completely
  const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -100]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.08, 0.12], [1, 1, 0]);
  const blur1 = useTransform(scrollYProgress, [0, 0.08, 0.12], ["blur(0px)", "blur(0px)", "blur(10px)"]);

  // Second section: 18% to 38%
  const x2 = useTransform(scrollYProgress, [0.18, 0.28, 0.38], [-100, 0, 100]);
  const opacity2 = useTransform(scrollYProgress, [0.18, 0.23, 0.33, 0.38], [0, 1, 1, 0]);
  const blur2 = useTransform(scrollYProgress, [0.18, 0.23, 0.33, 0.38], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]);

  // Third section: 44% to 70%
  const x3 = useTransform(scrollYProgress, [0.44, 0.54, 0.70], [100, 0, -100]);
  const opacity3 = useTransform(scrollYProgress, [0.44, 0.49, 0.65, 0.70], [0, 1, 1, 0]);
  const blur3 = useTransform(scrollYProgress, [0.44, 0.49, 0.65, 0.70], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none p-6 md:p-12 lg:p-24 flex flex-col justify-center overflow-hidden">
      
      {/* 0% Section - Center */}
      <motion.div 
        style={{ y: y1, opacity: opacity1, filter: blur1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <h1 className="text-5xl md:text-[8rem] lg:text-[10rem] leading-[0.85] font-light tracking-tighter text-white mb-6">
           <span className="font-medium tracking-tight">Jeswin Jestin.</span><br />
           <span className="text-white/90 text-4xl md:text-[5rem] lg:text-[6.5rem]">Product Associate.</span>
        </h1>
        <p className="text-white/40 text-[10px] md:text-sm tracking-[0.4em] uppercase mt-12">
           Scroll to explore
        </p>
      </motion.div>

      {/* 25% Section - Left */}
      <motion.div 
        style={{ x: x2, opacity: opacity2, filter: blur2 }}
        className="absolute inset-0 flex flex-col items-start justify-center pl-[6%] md:pl-[12%]"
      >
        <h2 className="text-4xl md:text-[6rem] lg:text-[7.5rem] leading-[0.9] font-light tracking-tighter text-white max-w-4xl">
           I build <br/> 
           <span className="font-normal bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 pb-4 block">
             user-centric products.
           </span>
        </h2>
      </motion.div>

      {/* 55% Section - Right */}
      <motion.div 
        style={{ x: x3, opacity: opacity3, filter: blur3 }}
        className="absolute inset-0 flex flex-col items-end justify-center pr-[6%] md:pr-[12%] text-right"
      >
        <h2 className="text-4xl md:text-[6rem] lg:text-[7rem] leading-[0.9] font-light tracking-tighter text-white max-w-4xl">
           Bridging <br/>
           <span className="font-normal bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-rose-400 to-red-400 pb-4 block">
              design & engineering.
           </span>
        </h2>
      </motion.div>

    </div>
  );
};
