'use client';

import { motion } from 'framer-motion';

const achievements = [
  {
    title: 'Winner - Revelation 2026',
    subtitle: 'Data Analysis & ML Challenge | IIEST Shibpur',
    link: 'https://www.linkedin.com/in/aryan-shukla-9b262622b/details/certifications/'
  },
  {
    title: '8th Position (Top 10%) - CodeShastraX 10.0',
    subtitle: 'State-Level 24-Hour Hackathon | DJSCE (March 2024)',
    link: 'https://www.linkedin.com/in/aryan-shukla-9b262622b/details/projects/1400976443/multiple-media-viewer'
  },
  {
    title: '3rd Position - F1nalyze',
    subtitle: 'Formula 1 Datathon | IEEE Manipal University Jaipur (June 2024)',
    link: 'https://www.linkedin.com/in/aryan-shukla-9b262622b/overlay/1720255770680/single-media-viewer'
  },
  {
    title: 'SAP Certification',
    subtitle: 'Artificial Intelligence & Machine Learning',
    link: 'https://www.linkedin.com/in/aryan-shukla-9b262622b/details/certifications/1224757753/multiple-media-viewer/'
  },
  {
    title: 'Alpha 5.0 - DSA',
    subtitle: 'ApnaCollege Data Structures & Algorithms',
    link: 'https://media.licdn.com/dms/image/v2/D4D2DAQFD62iqNx0L_A/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1714334998963'
  },
  {
    title: 'Technical Head',
    subtitle: 'E-Cell SLRTCE (July 2023 -- March 2024)',
    link: 'https://www.linkedin.com/in/aryan-shukla-9b262622b/overlay/1737871869755/single-media-viewer'
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-32 px-6 md:px-12 bg-navy-950">
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="text-xs uppercase tracking-[0.3em] text-orange-400 font-mono mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Milestones
        </motion.p>
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Achievements &{' '}
          <span className="text-gradient-cool">Certifications.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <motion.a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              className="group glass p-6 rounded-2xl relative overflow-hidden block hover:border-blue-500/30 transition-colors duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/5 group-hover:to-blue-500/10 transition-colors duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 text-xl">
                  {i < 3 ? '🏆' : '📜'}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed mb-4">
                  {item.subtitle}
                </p>
                <div className="text-xs font-mono text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  View Credential <span className="text-lg leading-none">&rarr;</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
