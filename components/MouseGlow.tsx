'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function MouseGlow() {
  const [mounted, setMounted] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[1] overflow-hidden"
      style={{
        background: `radial-gradient(circle 800px at var(--mouse-x) var(--mouse-y), rgba(249, 115, 22, 0.12), transparent 80%)`,
        // @ts-ignore
        '--mouse-x': springX.get() + 'px',
        // @ts-ignore
        '--mouse-y': springY.get() + 'px',
      } as any}
      animate={{
        // We use animate to force re-renders for the custom properties
        transition: { duration: 0 }
      }}
    />
  );
}
