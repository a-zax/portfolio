'use client';

import { motion } from 'framer-motion';
import { useAudio } from '@/hooks/use-audio';

const skillCategories = [
  {
    category: 'Languages',
    icon: '💻',
    skills: ['Python', 'SQL'],
  },
  {
    category: 'AI & ML',
    icon: '🧠',
    skills: ['Deep Learning (CNNs, Transformers, LSTMs, Metric Learning)', 'Computer Vision (OpenCV, YOLO)', 'OCR & Document Intelligence (Tesseract, PaddleOCR)', 'Natural Language Processing', 'Large Language Models', 'Semantic Segmentation', 'Transfer Learning (VGG19, ResNet)', 'Feature Engineering', 'XGBoost', 'TensorFlow (GPU)', 'PyTorch (CUDA)', 'Keras', 'Scikit-Learn'],
  },
  {
    category: 'Data Engineering',
    icon: '📊',
    skills: ['NumPy', 'Pandas', 'Data Preprocessing', 'Image Augmentation', 'Dataset Curation', 'ETL Pipelines'],
  },
  {
    category: 'Backend & APIs',
    icon: '🔌',
    skills: ['CRUD Operations', 'FastAPI', 'API Integration', 'Postman (API Testing)'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis (Caching)', 'Database Optimization'],
  },
  {
    category: 'System Design',
    icon: '⚙️',
    skills: ['Distributed Systems', 'Microservices Architecture', 'Concurrency Control (Locks, Semaphores, Mutex)', 'Queue Management', 'Message Queuing Systems', 'NAS', 'Multi-threading', 'Resource Management', 'ACID Compliance'],
  },
  {
    category: 'MLOps',
    icon: '🚀',
    skills: ['Model Evaluation & Optimization', 'GPU Acceleration (CUDA)', 'NVIDIA NVENC Pipelines', 'GStreamer', 'Real-time Inference', 'CI/CD Pipelines'],
  },
  {
    category: 'Development Tools',
    icon: '🛠️',
    skills: ['Git/GitHub', 'VS Code', 'Jupyter Notebook', 'Linux'],
  },
  {
    category: 'Cross Platform Dev',
    icon: '📱',
    skills: ['Qt (PySide6/PyQt5)', 'Kivy'],
  },
  {
    category: 'Visualization',
    icon: '📈',
    skills: ['Matplotlib', 'Seaborn', 'Data Visualization'],
  },
  {
    category: 'Soft Skills',
    icon: '🤝',
    skills: ['Technical Leadership', 'Cross-functional Collaboration', 'System Architecture Design', 'Code Review', 'Technical Documentation', 'SCRUM', 'Problem Solving'],
  }
];

export default function Skills() {
  const { playHover, playClick } = useAudio();
  return (
    <section id="skills" className="relative py-32 px-6 md:px-12">
      {/* Section divider glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(249,115,22,0.5), transparent)' }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.p
          className="text-xs uppercase tracking-[0.3em] text-orange-400 font-mono mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Expertise
        </motion.p>
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Skills &{' '}
          <span className="text-gradient-warm">Tools.</span>
        </motion.h2>

        {/* Responsive Grid for Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((group, gi) => (
            <motion.div
              key={group.category}
              onMouseEnter={playHover}
              className="glass rounded-3xl p-8 relative overflow-hidden group hover:border-orange-500/30 transition-colors duration-500"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
            >
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl shadow-inner">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">
                  {group.category}
                </h3>
              </div>

              {/* Skills Wrap */}
              <div className="flex flex-wrap gap-3 relative z-10">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    onMouseEnter={playHover}
                    onClick={playClick}
                    className="px-4 py-2 text-sm font-medium rounded-full bg-navy-900/60 border border-white/10 text-white/80 hover:text-white hover:border-orange-500/50 hover:bg-orange-500/10 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)] transition-all duration-300 cursor-default"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.1 + si * 0.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
