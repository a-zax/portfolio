'use client';

import { motion } from 'framer-motion';
import { useAudio } from '@/hooks/use-audio';

interface Project {
  title: string;
  points: string[];
  tags: string[];
  year: string;
  gradient: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: 'CogniSync AI',
    points: [
      'Engineered an adaptive onboarding application using Next.js, TypeScript, and Tailwind CSS to accelerate new employee ramp-up time.',
      'Designed a deterministic skill extraction engine to compare resumes against job descriptions, featuring optional Groq API integration for structured logic refinement.',
      'Implemented role-aware gap analysis that maps missing or under-proficient skills to a grounded local course catalog.',
      'Built a staged learning pathway generator complete with progress metrics, ROI summaries, and interactive radar charts.',
    ],
    tags: ['Next.js', 'TypeScript', 'Groq API', 'Tailwind'],
    year: '2026',
    gradient: 'from-orange-500/20 to-amber-400/10',
    link: 'https://github.com/a-zax/ArtPark_team_monikabhati2005.git'
  },
  {
    title: 'BrainDead 2K26 - AI Innovation Suite',
    points: [
      'Problem Statement 1 (ReelSense): Developed a Hybrid Ensemble Recommender System fusing SVD, CF, Popularity, and Content-based algorithms.',
      'Optimized recommendation diversity using Maximal Marginal Relevance (MMR), achieving an outstanding 0.8266 Intra-List Diversity score.',
      'Problem Statement 2 (Cognitive Radiology Assistant): Built a Hierarchical Vision-Language Model for Chest X-Ray Reporting using PRO-FA (visual feature alignment) and MIX-MLP architectures.',
      'Achieved a 0.6421 CheXpert F1 score, utilizing a recursive cognitive triangular attention (RCTA) mechanism with clinical post-processing safety layers.',
    ],
    tags: ['Python', 'Vision-Language Models', 'RecSys', 'Transformers'],
    year: '2026',
    gradient: 'from-rose-500/20 to-pink-400/10',
    link: 'https://github.com/a-zax/CogniReck.git'
  },
  {
    title: 'OPTIGROW',
    points: [
      'Engineered a state-of-the-art face authentication module leveraging a Metric Learning approach to extract high-dimensional facial embeddings.',
      'Ensured millisecond-level data synchronization and low-latency retrieval via a robust Polygon API caching layer.',
      'Implemented highly optimized preprocessing pipelines utilizing Python, OpenCV, and dlib to standardize input images.',
    ],
    tags: ['Python', 'OpenCV', 'dlib', 'MongoDB'],
    year: '2024',
    gradient: 'from-blue-500/20 to-purple-400/10',
    link: 'https://github.com/a-zax/OptiGrow.git'
  },
  {
    title: 'IRIS-INSIGHT',
    points: [
      'Developed an AI-based early-stage cataract detection pipeline using a VGG19 Transfer Learning architecture.',
      'Implemented advanced morphological transformations (dilation, erosion, edge detection) to enhance feature visibility in low-light medical intraocular scans.',
      'Trained and validated the model using TensorFlow/Keras, optimizing hyperparameters to achieve high clinical precision.',
    ],
    tags: ['TensorFlow', 'Keras', 'OpenCV', 'VGG19'],
    year: '2024',
    gradient: 'from-emerald-500/20 to-teal-400/10',
    link: 'https://github.com/a-zax/IRIS-Insight.git'
  },
  {
    title: 'F1-STRAT',
    points: [
      'Designed a high-performance predictive system forecasting Formula 1 podium finishes using over 70+ years of historical race data.',
      'Developed a robust XGBoost machine learning pipeline for accurate lap time forecasts and anomaly detection.',
      'Modeled advanced pit-stop strategies utilizing Monte Carlo simulations to calculate probabilistic race outcomes under varying conditions.',
    ],
    tags: ['XGBoost', 'Python', 'Scikit-Learn', 'Pandas'],
    year: '2024',
    gradient: 'from-violet-500/20 to-indigo-400/10',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Projects() {
  const { playHover, playClick } = useAudio();
  return (
    <section className="relative py-32 px-6 md:px-12 bg-navy-950">
      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-20">
        <motion.p
          className="text-xs uppercase tracking-[0.3em] text-orange-400 font-mono mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Selected Work
        </motion.p>
        <motion.h2
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Projects that{' '}
          <span className="text-gradient-warm">matter.</span>
        </motion.h2>
      </div>

      {/* List Layout instead of Grid */}
      <motion.div
        className="max-w-5xl mx-auto space-y-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
          hidden: {}
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            onMouseEnter={playHover}
            className="group relative rounded-3xl p-8 md:p-12 glass overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
          >
            {/* Ambient Background Glow */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none`}
            />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <span className="text-sm font-mono text-orange-400 mb-2 block tracking-wider uppercase">
                    {project.year}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-gradient-warm transition-all duration-300">
                    {project.title}
                  </h3>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClick}
                    onMouseEnter={playHover}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-orange-500/30 text-white/80 transition-all duration-300 backdrop-blur-md"
                    title="View Code"
                  >
                    <span className="font-mono text-sm">View Source</span>
                    <span>↗</span>
                  </a>
                )}
              </div>

              {/* In-depth Bullet Points */}
              <ul className="space-y-4 mb-8">
                {project.points.map((point, idx) => (
                  <li key={idx} className="flex gap-4 text-white/70 text-[15px] leading-relaxed">
                    <span className="text-orange-500 mt-1 shrink-0">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-full bg-navy-900/50 border border-white/10 text-white/50 font-mono tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
