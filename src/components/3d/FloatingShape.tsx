'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedMesh() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
        }
    });

    return (
        <Icosahedron ref={meshRef} args={[2, 1]} scale={1.5}>
            <MeshDistortMaterial
                color="#8b5cf6"
                attach="material"
                distort={0.3}
                speed={2}
                roughness={0.4}
                metalness={0.8}
                wireframe
            />
        </Icosahedron>
    );
}

export default function FloatingShape() {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 6], fov: 45 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
                <AnimatedMesh />
            </Canvas>
        </div>
    );
}
