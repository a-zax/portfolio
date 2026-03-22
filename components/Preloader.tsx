'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [stage, setStage] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = 'hidden';

    // Cinematic sequencing - 8 Seconds Total
    const s1 = setTimeout(() => setStage(1), 500); // 0.5s: ARCHITECT
    const s2 = setTimeout(() => setStage(2), 2500); // 2.5s: INNOVATE
    const s3 = setTimeout(() => setStage(3), 4500); // 4.5s: ARYAN SHUKLA
    const s4 = setTimeout(() => setStage(4), 7000); // 7.0s: The Breach / Blast Doors
    const s5 = setTimeout(() => {
      setComplete(true);
      document.body.style.overflow = ''; // Re-enable scrolling
    }, 8500); // 8.5s: Complete

    return () => {
      clearTimeout(s1);
      clearTimeout(s2);
      clearTimeout(s3);
      clearTimeout(s4);
      clearTimeout(s5);
      document.body.style.overflow = '';
    };
  }, []);

  if (complete) return null;

  return (
    <div className="fixed inset-0 z-[10000] pointer-events-none flex flex-col justify-center items-center overflow-hidden">
      
      {/* Top Half of the Blast Door */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1/2 bg-[#02050A] z-20 origin-top border-b border-orange-500/0"
        initial={{ y: '0%' }}
        animate={stage === 4 ? { y: '-100%', borderBottomColor: 'rgba(249,115,22,1)', boxShadow: '0 50px 100px rgba(249,115,22,0.8)' } : { y: '0%' }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      />
      
      {/* Bottom Half of the Blast Door */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#02050A] z-20 origin-bottom border-t border-amber-400/0"
        initial={{ y: '0%' }}
        animate={stage === 4 ? { y: '100%', borderTopColor: 'rgba(251,191,36,1)', boxShadow: '0 -50px 100px rgba(251,191,36,0.8)' } : { y: '0%' }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* Massive Typography Container */}
      <div className="absolute inset-0 z-30 flex items-center justify-center mix-blend-plus-lighter">
        <AnimatePresence mode="wait">
          
          {/* Stage 1: ARCHITECT */}
          {stage === 1 && (
            <motion.h1
              key="word1"
              className="font-black text-[15vw] tracking-tighter text-white uppercase leading-none opacity-80"
              initial={{ opacity: 0, scale: 0.8, filter: 'blur(30px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.5, filter: 'blur(20px)', transition: { duration: 0.6 } }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            >
              ARCHITECT
            </motion.h1>
          )}

          {/* Stage 2: INNOVATE */}
          {stage === 2 && (
            <motion.h1
              key="word2"
              className="font-black text-[15vw] tracking-tighter text-white uppercase leading-none opacity-80"
              initial={{ opacity: 0, scale: 0.5, filter: 'blur(30px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.5, filter: 'blur(20px)', transition: { duration: 0.6 } }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            >
              INNOVATE
            </motion.h1>
          )}

          {/* Stage 3: THE NAME */}
          {stage === 3 && (
            <motion.h1
              key="name"
              className="font-black text-[18vw] md:text-[15vw] text-gradient-warm uppercase leading-none text-center"
              initial={{ opacity: 0, scale: 0.3, letterSpacing: '-0.3em', filter: 'blur(30px)' }}
              animate={{ opacity: 1, scale: 1, letterSpacing: '-0.05em', filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 2.5, filter: 'blur(30px)', transition: { duration: 0.8, ease: 'easeInOut' } }}
              transition={{ duration: 1.8, type: 'spring', bounce: 0.4 }}
            >
              ARYAN
              <br />
              SHUKLA
            </motion.h1>
          )}
        </AnimatePresence>
      </div>

      {/* Extreme Flash upon reveal */}
      {stage === 4 && (
        <motion.div
          className="absolute inset-0 bg-white z-[40]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      )}

      {/* Film Grain constantly active behind doors */}
      <div className="absolute inset-0 z-40 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none" />

    </div>
  );
}
