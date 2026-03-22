'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Software Engineer III, Research & Development',
    company: 'Blujay Robotics Pvt Ltd',
    location: 'Mumbai, India',
    date: 'May 2025 -- Present',
    focus: 'AI Perception & Distributed Internal Infrastructure',
    points: [
      'Real-Time Thermal Anomaly Detection: Architected an industrial-grade detection model utilizing auto-training loops to mitigate false positives. Implemented 3D spatial triangulation algorithms to estimate target depth and height using single-camera feeds.',
      'Edge AI Simulation: Built simulation-to-reality workflows using MATLAB-Python bridges for sensor fusion (CNN + Transformer architectures), ensuring model viability before hardware deployment.',
      'Automated Document Intelligence (ERP): Engineered an end-to-end OCR pipeline to digitize workforce attendance logs. Utilized semantic segmentation to extract tabular data, eliminating manual entry and reducing processing time by 90%.',
      'Secure Distributed Messaging Protocol: Designed a local-only, air-gapped messaging & file sharing infrastructure. Implemented advanced file-locking mechanisms and priority queues to handle high-throughput read/write operations onto NAS Server.',
      'Fault-Tolerant Enterprise Workflow: Developing a multi-level approval system handling inter-departmental concurrency. Designed the architecture to maintain ACID compliance and data redundancy.',
    ],
  },
  {
    role: 'Software Engineer Intern, Research & Development',
    company: 'Blujay Robotics Pvt Ltd',
    location: 'Mumbai, India',
    date: 'Jan 2025 -- April 2025',
    focus: 'AI Vision & Optimization',
    points: [
      'Video Analytics Pipeline: Engineered pixel-level anomaly detection using LSTM networks on RTSP streams, achieving 94% accuracy. Optimized GPU rendering pipelines to handle 90+ concurrent streams at sub-20ms latency.',
      'Resource Optimization: Developed dynamic queue-based allocation logic for camera feeds, improving CPU/GPU utilization by 40%. Migrated legacy UI systems to Kivy, reducing interface latency.',
      'Data Engineering: Curated a proprietary dataset of 45,000+ samples to robustify model thresholds, reducing false alerts by 35%.',
    ],
  },
];

const responsibilities = [
  "Led and took ownership for deployments, demos, and integration for two full-cycle software projects, driving architecture decisions.",
  "Conducted peer code reviews, fixed bugs, and maintained shared code-bases using Git-based workflows.",
  "Co-ordinated with cross-functional teammates to align development work with hardware and field deployment requirements.",
  "Created internal documentation for debugging and troubleshooting guides to support smoother deployments and faster issue resolution.",
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6 md:px-12 bg-navy-900 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-xs uppercase tracking-[0.3em] text-orange-400 font-mono mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Career
        </motion.p>
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Professional{' '}
          <span className="text-gradient-warm">Experience.</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="relative pl-8 md:pl-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.6)]" />

              <div className="mb-2 flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                <span className="text-sm font-mono text-orange-400 shrink-0">{exp.date}</span>
              </div>
              
              <div className="text-white/60 text-sm mb-6 font-medium">
                {exp.company} &middot; {exp.location}
              </div>

              <div className="mb-6 inline-block px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-amber-300">
                Focus: {exp.focus}
              </div>

              <ul className="space-y-4">
                {exp.points.map((point, j) => {
                  const [boldPart, ...rest] = point.split(': ');
                  return (
                    <li key={j} className="text-white/60 text-sm leading-relaxed flex gap-3">
                      <span className="text-orange-500 mt-1">▹</span>
                      <span>
                        {rest.length > 0 ? (
                          <>
                            <strong className="text-white/90">{boldPart}:</strong> {rest.join(': ')}
                          </>
                        ) : (
                          point
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Positions of Responsibility */}
        <motion.div
          className="mt-24 p-8 glass rounded-2xl border border-white/10 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none" />
          <h3 className="text-xl font-bold mb-6 text-white relative z-10 flex items-center gap-3">
            <span className="text-orange-400">⚡</span> Positions of Responsibility
          </h3>
          <ul className="space-y-4 relative z-10">
            {responsibilities.map((resp, i) => (
              <li key={i} className="text-white/70 text-sm leading-relaxed flex gap-3">
                <span className="text-white/30 mt-1">—</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
