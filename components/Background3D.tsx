'use client';

import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// An "Exotic" glowing nebula cloud
function Nebula() {
  const mesh = useRef<any>();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.x = Math.cos(t / 4) / 8;
      mesh.current.rotation.y = Math.sin(t / 4) / 8;
      mesh.current.position.y = Math.sin(t / 2) / 10;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={mesh} args={[1, 64, 64]} scale={4}>
        <MeshDistortMaterial
          color="#1e1b4b"
          speed={2}
          distort={0.4}
          radius={1}
          opacity={0.15}
          transparent
          side={THREE.BackSide}
        />
      </Sphere>
    </Float>
  );
}

function ParticleMasterpiece() {
  const pointsRef = useRef<any>();
  const count = 25000;
  
  const [positions, colors, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const color = new THREE.Color();
    
    for (let i = 0; i < count; i++) {
      // Create a complex "Future" field: A mix of a torus and random noise
      const angle = Math.random() * Math.PI * 2;
      const radius = 4 + Math.random() * 6;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = (Math.random() - 0.5) * 10;

      positions[i * 3] = x + (Math.random() - 0.5) * 2;
      positions[i * 3 + 1] = y + (Math.random() - 0.5) * 2;
      positions[i * 3 + 2] = z + (Math.random() - 0.5) * 2;

      // "Exotic" Color Palette: Neon Orange, Electric Blue, Deep Purple
      const mix = Math.random();
      if (mix < 0.4) color.setHex(0xf97316); // Orange
      else if (mix < 0.7) color.setHex(0x3b82f6); // Blue
      else color.setHex(0xa855f7); // Purple

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
      
      sizes[i] = Math.random();
    }
    return [positions, colors, sizes];
  }, [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.05;
      pointsRef.current.rotation.x = t * 0.02;

      // Mouse reactivity
      const { x, y } = state.pointer;
      pointsRef.current.rotation.y += x * 0.2;
      pointsRef.current.rotation.x -= y * 0.2;
    }
  });

  return (
    <Points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <PointMaterial
        transparent
        vertexColors
        size={0.035}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.6}
      />
    </Points>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#02050A]">
      <Canvas 
        camera={{ position: [0, 0, 15], fov: 45 }}
        dpr={[1, 2]} // High quality for "Masterpiece"
      >
        <color attach="background" args={['#02050a']} />
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <group>
            <ParticleMasterpiece />
            <Nebula />
          </group>
        </Suspense>
      </Canvas>
      {/* Dynamic Vignette overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, #02050A 100%)'
        }}
      />
    </div>
  );
}
