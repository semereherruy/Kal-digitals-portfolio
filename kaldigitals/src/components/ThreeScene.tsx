'use client';

import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

/* Floating distorted sphere — premium ambient element */
function AbstractSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.08 + pointer.y * 0.15;
    meshRef.current.rotation.y = t * 0.12 + pointer.x * 0.15;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef} position={[3, 0.5, -1.5]} scale={2.6}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#3A6A8A"
          distort={0.3}
          speed={1.8}
          roughness={0.2}
          metalness={0.7}
          emissive="#1A4A6A"
          emissiveIntensity={0.6}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  );
}

/* Gold ring accent */
function RingAccent() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    meshRef.current.rotation.z = t * 0.2;
    meshRef.current.rotation.x = t * 0.1;
  });

  return (
    <mesh ref={meshRef} position={[3, 0.5, -1.5]}>
      <torusGeometry args={[3.8, 0.02, 8, 80]} />
      <meshStandardMaterial
        color="#C9962A"
        emissive="#C9962A"
        emissiveIntensity={0.6}
        roughness={0.3}
        metalness={0.9}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}

/* Ambient particles field */
function Particles({ count = 80 }: { count?: number }) {
  const positions = useRef(
    new Float32Array(
      Array.from({ length: count * 3 }, () => (Math.random() - 0.5) * 16)
    )
  );
  const meshRef = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.02;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions.current, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#E0B04A"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#E0B04A" />
      <directionalLight position={[-3, -2, -3]} intensity={0.4} color="#6AA0C4" />
      <pointLight position={[0, 3, 4]} intensity={0.5} color="#C9962A" />

      <AbstractSphere />
      <RingAccent />
      <Particles />
    </Canvas>
  );
}
