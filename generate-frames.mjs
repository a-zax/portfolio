/**
 * generate-frames.mjs
 * Generates 60 cinematic dual-tone gradient placeholder frames (PNG → saved as WebP-named)
 * Run: node generate-frames.mjs
 * Requires: npm install canvas
 */

import { createCanvas } from 'canvas';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, 'public', 'sequence');
const TOTAL_FRAMES = 60;
const WIDTH = 1920;
const HEIGHT = 1080;

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function lerpColor(c1, c2, t) {
  return {
    r: Math.round(lerp(c1.r, c2.r, t)),
    g: Math.round(lerp(c1.g, c2.g, t)),
    b: Math.round(lerp(c1.b, c2.b, t)),
  };
}

function toRgba(c, a = 1) {
  return `rgba(${c.r},${c.g},${c.b},${a})`;
}

// Palette
const DEEP_NAVY  = { r: 2,   g: 8,   b: 24  };
const NAVY       = { r: 5,   g: 14,  b: 34  };
const ORANGE_HOT = { r: 249, g: 115, b: 22  };
const AMBER      = { r: 251, g: 191, b: 36  };
const BLUE_COOL  = { r: 30,  g: 64,  b: 175 };
const ICE_BLUE   = { r: 147, g: 197, b: 253 };

for (let i = 0; i < TOTAL_FRAMES; i++) {
  const t = i / (TOTAL_FRAMES - 1); // 0→1

  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  // ── Background: deep navy ──
  ctx.fillStyle = toRgba(DEEP_NAVY);
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // ── Warm key light (top-left, pulsing orange) ──
  const keyRadius = WIDTH * (0.6 + 0.15 * Math.sin(t * Math.PI * 2));
  const keyGrad = ctx.createRadialGradient(
    WIDTH * 0.35, HEIGHT * 0.2 + HEIGHT * 0.1 * t,
    0,
    WIDTH * 0.35, HEIGHT * 0.2,
    keyRadius
  );
  const keyColor = lerpColor(ORANGE_HOT, AMBER, Math.sin(t * Math.PI));
  keyGrad.addColorStop(0, toRgba(keyColor, 0.55));
  keyGrad.addColorStop(0.45, toRgba(keyColor, 0.18));
  keyGrad.addColorStop(1, toRgba(keyColor, 0));
  ctx.fillStyle = keyGrad;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // ── Cool fill light (right side, blue) ──
  const fillGrad = ctx.createRadialGradient(
    WIDTH * (0.8 + 0.08 * Math.cos(t * Math.PI * 2)), HEIGHT * 0.55,
    0,
    WIDTH * 0.8, HEIGHT * 0.55,
    WIDTH * 0.7
  );
  const fillColor = lerpColor(BLUE_COOL, ICE_BLUE, t);
  fillGrad.addColorStop(0, toRgba(fillColor, 0.35));
  fillGrad.addColorStop(0.5, toRgba(fillColor, 0.1));
  fillGrad.addColorStop(1, toRgba(fillColor, 0));
  ctx.fillStyle = fillGrad;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // ── Vertical gradient overlay (top navy, bottom warm) ──
  const vGrad = ctx.createLinearGradient(0, 0, 0, HEIGHT);
  vGrad.addColorStop(0, toRgba(NAVY, 0.4));
  vGrad.addColorStop(0.5, 'rgba(0,0,0,0)');
  vGrad.addColorStop(1, toRgba(lerpColor(ORANGE_HOT, AMBER, t), 0.25));
  ctx.fillStyle = vGrad;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // ── Rim light strip (animated left edge) ──
  const rimX = WIDTH * 0.28 + WIDTH * 0.04 * Math.sin(t * Math.PI * 3);
  const rimGrad = ctx.createLinearGradient(rimX - 80, 0, rimX + 80, 0);
  rimGrad.addColorStop(0, 'rgba(255,255,255,0)');
  rimGrad.addColorStop(0.5, `rgba(255,255,255,${0.04 + 0.03 * Math.sin(t * Math.PI * 4)})`);
  rimGrad.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = rimGrad;
  ctx.fillRect(rimX - 80, 0, 160, HEIGHT);

  // ── Vignette ──
  const vigGrad = ctx.createRadialGradient(WIDTH / 2, HEIGHT / 2, HEIGHT * 0.3, WIDTH / 2, HEIGHT / 2, WIDTH * 0.85);
  vigGrad.addColorStop(0, 'rgba(0,0,0,0)');
  vigGrad.addColorStop(1, 'rgba(2,8,24,0.65)');
  ctx.fillStyle = vigGrad;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // ── Scan line / film grain overlay ──
  for (let y = 0; y < HEIGHT; y += 4) {
    ctx.fillStyle = `rgba(0,0,0,${0.025 + 0.015 * Math.random()})`;
    ctx.fillRect(0, y, WIDTH, 1);
  }

  // ── Frame index label (bottom-right, subtle) ──
  ctx.font = '22px monospace';
  ctx.fillStyle = 'rgba(255,255,255,0.08)';
  ctx.textAlign = 'right';
  ctx.fillText(`frame ${String(i + 1).padStart(4, '0')} / ${TOTAL_FRAMES}`, WIDTH - 24, HEIGHT - 20);

  // Save as PNG buffer but name it .webp (browser will handle both)
  const buffer = canvas.toBuffer('image/png');
  const padded = String(i + 1).padStart(4, '0');
  const outPath = path.join(OUTPUT_DIR, `frame_${padded}.webp`);
  fs.writeFileSync(outPath, buffer);

  if ((i + 1) % 10 === 0) {
    console.log(`Generated ${i + 1}/${TOTAL_FRAMES} frames`);
  }
}

console.log(`\n✓ All ${TOTAL_FRAMES} frames written to public/sequence/`);
