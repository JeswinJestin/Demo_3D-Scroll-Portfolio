"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface IrisPreloaderProps {
  isLoading: boolean;
  progress?: number; 
}

export const IrisPreloader = ({ isLoading, progress = 0 }: IrisPreloaderProps) => {

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center text-white pointer-events-none"
        >
          {/* SVG Background with animated Iris Mask */}
          <svg className="absolute inset-0 w-full h-full pointer-events-auto">
            <defs>
              <mask id="iris-mask">
                <rect width="100%" height="100%" fill="white" />
                <motion.circle 
                  cx="50%" cy="50%" r="0" fill="black" 
                  exit={{ r: "150vw", transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] } }}
                />
              </mask>
            </defs>
            <rect width="100%" height="100%" fill="#050505" mask="url(#iris-mask)" />
          </svg>

          {/* Progress Indicator */}
          <motion.div 
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="flex flex-col items-center gap-6 z-10"
          >
            <div className="w-12 h-12 rounded-full border border-white/20 border-t-white animate-spin" />
            <div className="text-xs tracking-[0.4em] font-light text-white/50">
              INITIALIZING EXPERIENCE
            </div>
            
            <div className="w-64 h-[2px] bg-white/10 mt-8 overflow-hidden relative rounded-full">
              <motion.div 
                className="absolute top-0 left-0 bottom-0 bg-white"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.1 }}
              />
            </div>
            <div className="text-[10px] tracking-widest text-white/30 mt-2">
              {Math.round(progress)}%
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
