'use client';

import { useCallback, useEffect, useRef } from 'react';

export function useAudio() {
  const audioCtx = useRef<AudioContext | null>(null);

  useEffect(() => {
    return () => {
      if (audioCtx.current) {
        audioCtx.current.close();
      }
    };
  }, []);

  const initCtx = useCallback(() => {
    if (!audioCtx.current) {
      audioCtx.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (audioCtx.current.state === 'suspended') {
      audioCtx.current.resume();
    }
  }, []);

  const playHover = useCallback(() => {
    initCtx();
    if (!audioCtx.current) return;
    const osc = audioCtx.current.createOscillator();
    const gain = audioCtx.current.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, audioCtx.current.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.current.currentTime + 0.05);
    gain.gain.setValueAtTime(0.01, audioCtx.current.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.current.currentTime + 0.05);
    osc.connect(gain);
    gain.connect(audioCtx.current.destination);
    osc.start();
    osc.stop(audioCtx.current.currentTime + 0.05);
  }, [initCtx]);

  const playClick = useCallback(() => {
    initCtx();
    if (!audioCtx.current) return;
    const osc = audioCtx.current.createOscillator();
    const gain = audioCtx.current.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(150, audioCtx.current.currentTime);
    osc.frequency.exponentialRampToValueAtTime(50, audioCtx.current.currentTime + 0.1);
    gain.gain.setValueAtTime(0.015, audioCtx.current.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.current.currentTime + 0.1);
    osc.connect(gain);
    gain.connect(audioCtx.current.destination);
    osc.start();
    osc.stop(audioCtx.current.currentTime + 0.1);
  }, [initCtx]);

  const playWhoosh = useCallback(() => {
    initCtx();
    if (!audioCtx.current) return;
    const noise = audioCtx.current.createBufferSource();
    const bufferSize = audioCtx.current.sampleRate * 1.5;
    const buffer = audioCtx.current.createBuffer(1, bufferSize, audioCtx.current.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    noise.buffer = buffer;

    const filter = audioCtx.current.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(100, audioCtx.current.currentTime);
    filter.frequency.exponentialRampToValueAtTime(3000, audioCtx.current.currentTime + 0.5);
    filter.frequency.exponentialRampToValueAtTime(100, audioCtx.current.currentTime + 1.2);

    const gain = audioCtx.current.createGain();
    gain.gain.setValueAtTime(0, audioCtx.current.currentTime);
    gain.gain.linearRampToValueAtTime(0.05, audioCtx.current.currentTime + 0.5);
    gain.gain.linearRampToValueAtTime(0, audioCtx.current.currentTime + 1.5);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.current.destination);
    noise.start();
  }, [initCtx]);

  const playPowerUp = useCallback(() => {
    initCtx();
    if (!audioCtx.current) return;
    const osc = audioCtx.current.createOscillator();
    const gain = audioCtx.current.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(50, audioCtx.current.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, audioCtx.current.currentTime + 1.5);
    gain.gain.setValueAtTime(0.01, audioCtx.current.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.current.currentTime + 1.5);
    osc.connect(gain);
    gain.connect(audioCtx.current.destination);
    osc.start();
    osc.stop(audioCtx.current.currentTime + 1.5);
  }, [initCtx]);

  return { playHover, playClick, playWhoosh, playPowerUp };
}
