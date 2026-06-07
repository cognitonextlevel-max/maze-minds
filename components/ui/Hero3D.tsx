"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows, SpotLight } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

function AnimatedShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Target values for lerping
  const targetScale = active ? 1.2 : 1;

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Smoothly rotate the shape
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      
      // Make it slightly follow the mouse
      const targetX = (state.mouse.x * Math.PI) / 4;
      meshRef.current.rotation.z += 0.05 * (targetX - meshRef.current.rotation.z);

      // Lerp scale
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 5);
      
      // Lerp color
      const targetColor = new THREE.Color(hovered ? "#E63946" : "#1B2A4E");
      (meshRef.current.material as THREE.MeshStandardMaterial).color.lerp(targetColor, delta * 5);
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
      <mesh
        ref={meshRef}
        onClick={() => setActive(!active)}
        onPointerOver={() => {
          setHover(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHover(false);
          document.body.style.cursor = 'auto';
        }}
      >
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <meshStandardMaterial color="#1B2A4E" roughness={0.1} metalness={0.8} />
      </mesh>
    </Float>
  );
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 mix-blend-multiply opacity-80 md:opacity-100 pointer-events-none">
      <div className="absolute inset-0 pointer-events-auto">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <SpotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#E63946" castShadow />
          <SpotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={1.5} color="#2BA8E8" />
          <AnimatedShape />
          <Environment preset="city" />
          <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
        </Canvas>
      </div>
    </div>
  );
}
