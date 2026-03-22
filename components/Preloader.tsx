'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [complete, setComplete] = useState(false);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = 'hidden';

    // Cinematic sequencing
    const t1 = setTimeout(() => setStage(1), 500); // Stage 1: "A Portfolio by"
    const t2 = setTimeout(() => setStage(2), 2500); // Stage 2: Fade out 1, fade in "Aryan Shukla"
    const t3 = setTimeout(() => setStage(3), 4500); // Stage 3: The massive slam
    const t4 = setTimeout(() => {
      setComplete(true);
      document.body.style.overflow = ''; // Re-enable scrolling
    }, 6000); // Remove preloader

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-[#02050A] flex flex-col items-center justify-center pointer-events-none overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            transition: { duration: 1.5, ease: 'easeInOut' } 
          }}
        >
          {/* Ambient Film Grain / Texture (pseudo) */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none" />

          {/* Stage 1 & 2: The Production Intro */}
          <AnimatePresence mode="wait">
            {stage === 1 && (
              <motion.div
                key="stage1"
                className="text-white/50 tracking-[0.5em] text-xs md:text-sm font-mono uppercase text-center"
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(10px)', transition: { duration: 1 } }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              >
                An interactive experience by
              </motion.div>
            )}
            
            {stage === 2 && (
              <motion.div
                key="stage2"
                className="text-white font-bold tracking-widest text-2xl md:text-3xl text-gradient-warm text-center"
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)', transition: { duration: 0.8 } }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              >
                ARYAN SHUKLA
              </motion.div>
            )}
          </AnimatePresence>

          {/* Stage 3: The Cinematic Zoom-Through */}
          {stage >= 3 && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center mix-blend-plus-lighter"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ 
                scale: [0.5, 1, 50],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 2, 
                times: [0, 0.4, 1], 
                ease: [0.8, 0, 0.2, 1] 
              }}
            >
              <div 
                className="w-full h-1 bg-orange-500 shadow-[0_0_100px_30px_rgba(249,115,22,0.8)]"
                style={{ transform: 'rotate(-45deg)', transformOrigin: 'center' }}
              />
            </motion.div>
          )}

          {stage >= 3 && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center mix-blend-plus-lighter"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ 
                scale: [0.5, 1, 50],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 2, 
                times: [0, 0.4, 1], 
                ease: [0.8, 0, 0.2, 1],
                delay: 0.1
              }}
            >
              <div 
                className="w-full h-1 bg-amber-400 shadow-[0_0_100px_30px_rgba(251,191,36,0.8)]"
                style={{ transform: 'rotate(45deg)', transformOrigin: 'center' }}
              />
            </motion.div>
          )}

        </motion.div>
      )}
    </AnimatePresence>
  );
}
