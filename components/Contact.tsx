'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [hovering, setHovering] = useState(false);

  return (
    <section id="contact" className="relative py-32 px-6 md:px-12 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(249,115,22,0.12) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          className="text-xs uppercase tracking-[0.3em] text-orange-400 font-mono mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.p>

        <motion.h2
          className="text-5xl md:text-7xl font-black leading-none mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Let&apos;s build something{' '}
          <span className="text-gradient-warm">great.</span>
        </motion.h2>

        <motion.p
          className="text-white/50 text-lg mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Whether it&apos;s a freelance project, a full-time role, or just a conversation
          about creative technology — I&apos;m always open to connecting.
        </motion.p>

        <motion.a
          href="mailto:aryanshukla212004@gmail.com"
          className="inline-block relative px-10 py-5 rounded-full text-lg font-semibold text-white overflow-hidden"
          style={{
            background: hovering
              ? 'linear-gradient(135deg, #f97316, #fbbf24)'
              : 'linear-gradient(135deg, rgba(249,115,22,0.2), rgba(251,191,36,0.1))',
            border: '1px solid rgba(249,115,22,0.4)',
            transition: 'background 0.4s ease',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          onHoverStart={() => setHovering(true)}
          onHoverEnd={() => setHovering(false)}
        >
          aryanshukla212004@gmail.com →
        </motion.a>
      </div>
    </section>
  );
}
