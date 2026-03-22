'use client';

import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function StarField(props: any) {
  const ref = useRef<any>();
  
  // Generate a spherical distribution of 5000 points
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

  useFrame((state, delta) => {
    if (ref.current) {
      // Slow rotation
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;

      // Slight mouse interactivity
      const mouseX = (state.pointer.x * Math.PI) / 10;
      const mouseY = (state.pointer.y * Math.PI) / 10;
      
      // Lerp towards mouse to make it smooth
      ref.current.rotation.x += (mouseY - ref.current.rotation.x) * 0.02;
      ref.current.rotation.y += (mouseX - ref.current.rotation.y) * 0.02;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#f97316"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-navy-950">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarField />
        </Suspense>
      </Canvas>
      {/* Overlay gradient to blend the 3D scene smoothly with the background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, #050E22 100%)'
        }}
      />
    </div>
  );
}
