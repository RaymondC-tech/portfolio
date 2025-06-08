'use client'

import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import React, { useRef } from 'react';
import { Points } from 'three';

const RotatingStars = () => {
    const ref = useRef<Points>(null);
    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.x += 0.0001;
            ref.current.rotation.y += 0.0001;
        }
    });
    return <Stars ref={ref} radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1}/>
} 

const Starfield = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
            <Canvas style={{background: 'black'}}>
                <RotatingStars/>
            </Canvas>
        </div>
        );
    };

export default Starfield