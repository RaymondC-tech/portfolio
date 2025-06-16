'use client'

import { useEffect, useState } from 'react'

export default function MouseGlow() {
    const [pos, setPos]  = useState({x: 0, y: 0})
    
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPos({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <div
      className="pointer-events-none fixed z-90 h-12 w-12 rounded-full bg-cyan-400 opacity-50 blur-2xl transition-transform duration-75"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        transition: 'transform 0.1s ease-out'
      }}
    />


    )











}