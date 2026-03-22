'use client';

import { useEffect, useRef, useCallback } from 'react';
import { useScroll, useTransform, motion, useMotionValueEvent } from 'framer-motion';

const TOTAL_FRAMES = 60;

function buildFrameUrl(index: number): string {
  const padded = String(index + 1).padStart(4, '0');
  return `/sequence/frame_${padded}.webp`;
}

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  // Draw frame to canvas
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[Math.round(index)];
    if (!canvas || !img || !img.complete) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // object-fit: cover logic
    const canvasAspect = canvas.width / canvas.height;
    const imgAspect = img.naturalWidth / img.naturalHeight;

    let sx = 0, sy = 0, sw = img.naturalWidth, sh = img.naturalHeight;

    if (imgAspect > canvasAspect) {
      sw = img.naturalHeight * canvasAspect;
      sx = (img.naturalWidth - sw) / 2;
    } else {
      sh = img.naturalWidth / canvasAspect;
      sy = (img.naturalHeight - sh) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
  }, []);

  // Resize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(currentFrameRef.current);
    };
    resize();

    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [drawFrame]);

  // Preload all frames
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = buildFrameUrl(i);
      img.onload = () => {
        loaded++;
        if (i === 0) drawFrame(0); // draw first frame ASAP
      };
      images.push(img);
    }
    imagesRef.current = images;
  }, [drawFrame]);

  // Scroll → frame
  useMotionValueEvent(frameIndex, 'change', (latest) => {
    const rounded = Math.round(latest);
    if (rounded !== currentFrameRef.current) {
      currentFrameRef.current = rounded;
      drawFrame(rounded);
    }
  });

  return (
    <div ref={containerRef} className="relative" style={{ height: '500vh' }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-navy-950">
        {/* Canvas layer */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ display: 'block' }}
        />

        {/* Cinematic vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 50%, rgba(2,8,24,0.7) 100%)',
          }}
        />

        {/* Bottom gradient fade into bg */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent, #020818)',
          }}
        />

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 1,
            delay: 0,
          }}
          style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
        >
          <span className="text-xs uppercase tracking-widest text-white/50 font-mono">
            scroll
          </span>
          <motion.div
            className="w-px h-8 bg-gradient-to-b from-orange-400 to-transparent"
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
      </div>
    </div>
  );
}
