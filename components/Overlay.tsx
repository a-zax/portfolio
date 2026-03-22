'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useAudio } from '@/hooks/use-audio';

const DATA_POINTS = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  duration: 10 + Math.random() * 20,
  delay: Math.random() * 5,
  size: 1 + Math.random() * 3,
  text: ['0', '1', '<', '>', '/', '_', '{', '}', 'AI', 'ML'].sort(() => Math.random() - 0.5)[0],
}));

function DataStream() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
      {DATA_POINTS.map((point) => (
        <motion.div
          key={point.id}
          className="absolute text-orange-500/40 font-mono select-none"
          style={{ 
            left: point.left, 
            fontSize: `${point.size}rem`,
            top: '-10%',
          }}
          initial={{ y: '-10%', opacity: 0 }}
          animate={{ 
            y: '120vh', 
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: point.duration,
            delay: point.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {point.text}
        </motion.div>
      ))}
    </div>
  );
}

export default function Overlay() {
  const [mounted, setMounted] = useState(false);
  const { playHover, playClick } = useAudio();
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* 4D Data Stream Background */}
      {mounted && <DataStream />}

      {/* Main Hero Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-orange-500 font-mono tracking-[0.5em] uppercase text-sm mb-6">
            AI & Software Engineer
          </p>
          
          <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-none mb-4">
            Aryan <span className="text-gradient-warm">Shukla.</span>
          </h1>

          <div className="h-px w-24 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto my-8 opacity-50" />

          <p className="max-w-xl mx-auto text-lg md:text-xl text-white/50 font-light leading-relaxed mb-10">
            Architecting high-performance intelligent systems. 
            Bridging R&D prototypes with scalable production.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="#contact"
              onMouseEnter={playHover}
              onClick={playClick}
              className="px-8 py-4 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
            <motion.button
              onMouseEnter={playHover}
              onClick={playClick}
              className="px-8 py-4 bg-white/5 text-white font-bold rounded-full border border-white/10 hover:bg-white/10 transition-all backdrop-blur-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-mono">Explore</span>
            <motion.div 
              className="w-px h-12 bg-gradient-to-b from-orange-500 to-transparent"
              animate={{ height: [0, 48, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
      
      {/* Dynamic light streak */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent blur-sm" />
    </section>
  );
}
