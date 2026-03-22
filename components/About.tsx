'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 md:px-12 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #f97316, transparent)' }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: text */}
        <div>
          <motion.p
            className="text-xs uppercase tracking-[0.3em] text-orange-400 font-mono mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A developer who{' '}
            <span className="text-gradient-warm">thinks</span> in
            experiences.
          </motion.h2>
          <motion.div
            className="space-y-4 text-white/60 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              I&apos;m a Software Engineer specializing in Computer Vision, Real-time Edge Computing, 
              and System Design. I bridge the gap between R&D prototypes and scalable, 
              industry-grade deployments.
            </p>
            <p>
              Currently, I design high-performance AI pipelines and distributed internal infrastructure 
              at Blujay Robotics. I have a proven track record of optimizing GPU-accelerated workflows 
              and building fault-tolerant enterprise systems.
            </p>
            <p>
              Whether it&apos;s real-time thermal anomaly detection, automated document intelligence (OCR), 
              or predicting F1 race outcomes — I love solving complex engineering challenges.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              { value: '1+', label: 'Years Exp.' },
              { value: '94%', label: 'Model Accuracy' },
              { value: '20+', label: 'Projects Shipped' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-black text-gradient-warm">{stat.value}</p>
                <p className="text-white/40 text-sm mt-1 font-mono">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: decorative card */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="glass rounded-3xl p-8 relative overflow-hidden">
            {/* Gradient card bg */}
            <div
              className="absolute inset-0 opacity-20 rounded-3xl"
              style={{
                background: 'linear-gradient(135deg, rgba(249,115,22,0.3) 0%, rgba(251,191,36,0.1) 50%, rgba(5,14,34,0) 100%)',
              }}
            />
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-2xl">
                  🎓
                </div>
                <div>
                  <p className="text-white font-semibold">B.E. Information Technology</p>
                  <p className="text-white/40 text-sm">Shree L.R. Tiwari College · 2021–2025 (9.45 CGPA)</p>
                </div>
              </div>
              <div className="h-px bg-white/10" />
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-2xl">
                  💼
                </div>
                <div>
                  <p className="text-white font-semibold">Software Engineer III</p>
                  <p className="text-white/40 text-sm">Blujay Robotics · May 2025 – Present</p>
                </div>
              </div>
              <div className="h-px bg-white/10" />
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-2xl">
                  🚀
                </div>
                <div>
                  <p className="text-white font-semibold">Software Engineer Intern</p>
                  <p className="text-white/40 text-sm">Blujay Robotics · Jan 2025 – Apr 2025</p>
                </div>
              </div>
              <div className="h-px bg-white/10" />
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-2xl">
                  🏆
                </div>
                <div>
                  <p className="text-white font-semibold">Hackathon Winner</p>
                  <p className="text-white/40 text-sm">Multiple events (CodeShastra, F1nalyze)</p>
                </div>
              </div>
            </div>

            {/* Futuristic Avatar Integration */}
            <div className="mt-8 relative pt-8 border-t border-white/5">
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 bg-navy-950/50">
                <img 
                  src="/portfolio/aryan_photo.png" 
                  alt="Aryan Shukla"
                  className="w-full h-full object-cover grayscale-[20%] brightness-110 contrast-110 hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute top-12 left-4 px-3 py-1 bg-orange-500 text-[10px] font-bold text-white rounded-full uppercase tracking-widest animate-pulse">
                System Active
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
