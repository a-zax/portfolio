'use client';

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // --- Section 1: 0% → Hero (center) ---
  const s1Opacity = useTransform(scrollYProgress, [0, 0.12, 0.22], [1, 1, 0]);
  const s1Y = useTransform(scrollYProgress, [0, 0.22], ['0%', '-8%']);

  // --- Section 2: 30% → Left ---
  const s2Opacity = useTransform(
    scrollYProgress,
    [0.25, 0.33, 0.48, 0.55],
    [0, 1, 1, 0]
  );
  const s2X = useTransform(scrollYProgress, [0.25, 0.35], ['-8%', '0%']);

  // --- Section 3: 60% → Right ---
  const s3Opacity = useTransform(
    scrollYProgress,
    [0.58, 0.66, 0.82, 0.9],
    [0, 1, 1, 0]
  );
  const s3X = useTransform(scrollYProgress, [0.58, 0.68], ['8%', '0%']);

  return (
    <div ref={containerRef} className="absolute inset-0" style={{ height: '500vh' }}>
      <div className="sticky top-0 h-screen w-full pointer-events-none overflow-hidden">

        {/* ── Section 1: HERO (center) ── */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-center px-6"
          style={{ opacity: s1Opacity, y: s1Y }}
        >
          <div>
            <motion.p
              className="text-sm uppercase tracking-[0.3em] text-orange-400 font-mono mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              AI & Software Engineer
            </motion.p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-6 overflow-hidden pb-2">
              <span className="text-gradient-warm inline-block overflow-hidden">
                {'Aryan'.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.5 + i * 0.08, ease: [0.33, 1, 0.68, 1] }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              <br />
              <span className="text-white/90 inline-block overflow-hidden">
                {'Shukla.'.split('').map((char, i) => (
                  <motion.span
                    key={`last-${i}`}
                    className="inline-block"
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.8 + i * 0.08, ease: [0.33, 1, 0.68, 1] }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h1>
            <motion.p
              className="text-lg text-white/50 max-w-md mx-auto font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.6 }}
            >
              Architecting high-performance intelligent systems
            </motion.p>
          </div>
        </motion.div>

        {/* ── Section 2: LEFT ── */}
        <motion.div
          className="absolute inset-0 flex items-center justify-start px-8 md:px-20"
          style={{ opacity: s2Opacity, x: s2X }}
        >
          <div className="max-w-lg">
            <p className="text-xs uppercase tracking-[0.3em] text-orange-400 font-mono mb-3">
              What I Do
            </p>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              I build{' '}
              <span className="text-gradient-warm">intelligent</span>
              <br />
              infrastructure.
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              From real-time anomaly detection to secure distributed systems — 
              I design robust models and fault-tolerant architectures.
            </p>
          </div>
        </motion.div>

        {/* ── Section 3: RIGHT ── */}
        <motion.div
          className="absolute inset-0 flex items-center justify-end px-8 md:px-20"
          style={{ opacity: s3Opacity, x: s3X }}
        >
          <div className="max-w-lg text-right">
            <p className="text-xs uppercase tracking-[0.3em] text-orange-400 font-mono mb-3">
              My Approach
            </p>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Bridging{' '}
              <span className="text-gradient-cool">research</span>
              <br />
              and reality.
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              Where cutting-edge AI models meet industry-grade deployment. 
              Optimizing every pipeline for precision and scale.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
