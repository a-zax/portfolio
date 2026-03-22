'use client';

import { motion } from 'framer-motion';

const socials = [
  { label: 'GitHub', href: 'https://github.com/a-zax' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aryan-shukla-9b262622b/' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-navy-950 py-16 px-6 md:px-12 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 -mb-16 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(249,115,22,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        {/* Left: branding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-2xl font-bold mb-1">
            <span className="text-gradient-warm">Aryan</span>
            <span className="text-white/90"> Shukla</span>
          </p>
          <p className="text-white/40 text-sm font-mono">AI & Software Engineer</p>
        </motion.div>

        {/* Center: socials */}
        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/40 hover:text-orange-400 transition-colors duration-200"
            >
              {s.label}
            </a>
          ))}
        </motion.div>

        {/* Right: copyright */}
        <motion.p
          className="text-xs text-white/25 font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          © {new Date().getFullYear()} — Built with Next.js
        </motion.p>
      </div>
    </footer>
  );
}
