"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Overlay } from "./Overlay";

export const ScrollyCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  
  // Track scroll progress within the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const totalFrames = 120;

  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    
    const preloadImages = async () => {
      const loadFrame = (i: number) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          imagesRef.current[i] = img;
          const frameIndex = i.toString().padStart(4, '0');
          
          img.onload = () => {
            if (i === 0) setLoaded(true);
            
            if (typeof window !== 'undefined') {
              const latest = scrollYProgress.get();
              const target = Math.min(Math.floor(latest * totalFrames), totalFrames - 1);
              if (i === target) {
                requestAnimationFrame(() => drawFrame(target));
              }
            }
            resolve();
          };
          
          img.onerror = () => resolve(); // continue on error to not block queue
          img.src = `/sequence/frame_${frameIndex}.webp`;
        });
      };

      // Load first 5 concurrently so user can see it instantly
      const initialBatch = Math.min(5, totalFrames);
      const initialPromises = [];
      for (let i = 0; i < initialBatch; i++) {
        initialPromises.push(loadFrame(i));
      }
      await Promise.all(initialPromises);

      // Load the rest sequentially (1 by 1) in the background
      // This ensures we never overload Chrome's concurrent request limits
      for (let i = initialBatch; i < totalFrames; i++) {
        await loadFrame(i);
      }
    };
    
    preloadImages();
  }, []);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;
    
    // Find closest loaded frame (fallback to nearest previous frame)
    let imgToDraw = null;
    let fallbackIndex = index;
    
    // Search backward for the most recent loaded frame
    while (fallbackIndex >= 0) {
      if (imagesRef.current[fallbackIndex] && imagesRef.current[fallbackIndex].complete && imagesRef.current[fallbackIndex].naturalWidth > 0) {
        imgToDraw = imagesRef.current[fallbackIndex];
        break;
      }
      fallbackIndex--;
    }
    
    // If not found backward, search forward as a last resort
    if (!imgToDraw) {
      fallbackIndex = index + 1;
      while (fallbackIndex < totalFrames) {
        if (imagesRef.current[fallbackIndex] && imagesRef.current[fallbackIndex].complete && imagesRef.current[fallbackIndex].naturalWidth > 0) {
          imgToDraw = imagesRef.current[fallbackIndex];
          break;
        }
        fallbackIndex++;
      }
    }

    if (!imgToDraw) return; // Still nothing loaded at all

    // Support High-DPI / Retina displays
    // The internal resolution is scaled, so we must calculate w, h based on canvas.width/height which is also scaled.
    const w = canvas.width;
    const h = canvas.height;
    
    const imgRatio = imgToDraw.width / imgToDraw.height;
    const canvasRatio = w / h;
    
    let drawWidth = w;
    let drawHeight = h;
    let offsetX = 0;
    let offsetY = 0;

    if (imgRatio > canvasRatio) {
      // Image is wider than canvas, crop horizontally
      drawWidth = h * imgRatio;
      offsetX = (w - drawWidth) / 2;
    } else {
      // Image is taller than canvas, crop vertically
      drawHeight = w / imgRatio;
      offsetY = (h - drawHeight) / 2;
    }

    // Since alpha: false, drawing image directly overwrites, but let's clear to be safe
    ctx.fillRect(0, 0, w, h);
    ctx.drawImage(imgToDraw, offsetX, offsetY, drawWidth, drawHeight);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!loaded) return;
    const frameIndex = Math.min(
      Math.floor(latest * totalFrames), 
      totalFrames - 1
    );
    // requestAnimationFrame for optimized rendering
    requestAnimationFrame(() => drawFrame(frameIndex));
  });

  useEffect(() => {
    const resizeCanvas = () => {
      if (canvasRef.current) {
        const dpr = window.devicePixelRatio || 1;
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        // Internal resolution upscaled
        canvasRef.current.width = width * dpr;
        canvasRef.current.height = height * dpr;
        
        // CSS display size
        canvasRef.current.style.width = `${width}px`;
        canvasRef.current.style.height = `${height}px`;
        
        if (loaded) {
          const latest = scrollYProgress.get();
          const frameIndex = Math.min(
            Math.floor(latest * totalFrames), 
            totalFrames - 1
          );
          drawFrame(frameIndex);
        }
      }
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas(); // Set initial dimensions
    
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [loaded, scrollYProgress]);

  // Initial draw once loaded
  useEffect(() => {
    if (loaded && canvasRef.current) {
      drawFrame(0);
    }
  }, [loaded]);

  return (
    <div ref={containerRef} className="h-[500vh] w-full relative z-0">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black flex items-center justify-center">
        <canvas ref={canvasRef} className="block w-full h-full" />
        <Overlay scrollYProgress={scrollYProgress} />
        
        {!loaded && (
          <div className="absolute inset-0 bg-black flex items-center justify-center z-50">
             <div className="flex flex-col items-center gap-4">
                <div className="w-8 h-8 rounded-full border-t-2 border-white animate-spin"></div>
                <span className="text-white/70 text-sm uppercase tracking-widest font-light">Loading Sequences</span>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};
