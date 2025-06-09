'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Slide } from '@/types/Slide';
import Image from 'next/image';
import { FaGithub } from "react-icons/fa";

interface ThreeSixtyCarouselProps {
  slides: Slide[];
  width?: number;
  height?: number;
  radius?: number;
  autoRotateInterval?: number;
}

export default function ProjectCarousel({
  slides,
  width = 600,
  height = 300,
  radius = 1000,
  autoRotateInterval = 5000,
}: ThreeSixtyCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rotatingRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [frontIndex, setFrontIndex] = useState(0);

  // A ref to mirror frontIndex so our callback sees the up-to-date value
  const frontRef = useRef(frontIndex);
  useEffect(() => {
    frontRef.current = frontIndex;
  }, [frontIndex]);

  const rotationRef = useRef(0);
  const draggingRef = useRef(false);
  const lastXRef = useRef(0);

  const slideCount = slides.length;
  const anglePerSlide = 360 / slideCount;
  const halfSlice = anglePerSlide / 2;

  // On mount, ensure the inner div starts at 0°
  useEffect(() => {
    if (rotatingRef.current) {
      rotatingRef.current.style.transform = 'rotateY(0deg)';
    }
  }, []);

  // Only update frontIndex when currentIndex changes (after a snap)
  useEffect(() => {
    setFrontIndex(currentIndex);
  }, [currentIndex]);

  // Auto-rotate timer
  useEffect(() => {

    if (draggingRef.current) return;

    const id = setInterval(() => {

      //1 compute next index
      const nextIndex = (currentIndex - 1 + slideCount) % slideCount;

      //2 apply new angle
      const newAngle = rotationRef.current + anglePerSlide;
      rotationRef.current = newAngle;

      //3 apply to dom
      if (rotatingRef.current){
        rotatingRef.current.style.transition = 'transform 0.3s ease';
        rotatingRef.current.style.transform = `rotateY(${rotationRef.current}deg)`;

        const onEnd = () => {
          if (rotatingRef.current) rotatingRef.current.style.transition = '';
          rotatingRef.current?.removeEventListener('transitionend', onEnd);
        };
        rotatingRef.current.addEventListener('transitionend', onEnd);
      }
      //4 bump currentIndex and frontIndex togethere;
      setCurrentIndex(nextIndex);
      setFrontIndex(nextIndex);

    }, autoRotateInterval);
    return () => clearInterval(id);
  }, [currentIndex, slideCount, anglePerSlide, autoRotateInterval]);


  // Normalize into [0,360)
  const normalizeDeg = (deg: number) => {
    let d = deg % 360;
    return d < 0 ? d + 360 : d;
  };

  // Minimal distance on a 360° circle
  const minimalAngularDistance = (a: number, b: number) => {
    const diff = Math.abs(a - b);
    return Math.min(diff, 360 - diff);
  };

  // Handle pointer move (drag)
  const handlePointerMove = useCallback(
    (evt: MouseEvent | TouchEvent) => {
      if (!draggingRef.current) return;
      evt.preventDefault();

      // Current pointer X
      const x = evt instanceof MouseEvent ? evt.clientX : evt.touches[0].clientX;
      const dx = x - lastXRef.current;

      // Rotate by dx * sensitivity
      const sensitivity = 0.2;
      rotationRef.current += dx * sensitivity;

      // Immediate transform (no transition)
      if (rotatingRef.current) {
        rotatingRef.current.style.transform = `rotateY(${rotationRef.current}deg)`;
      }

      // Compute rotDeg in [0,360)
      const rotDeg = normalizeDeg(-rotationRef.current);

      // Find which slide’s face-angle is closest to rotDeg
      let bestIdx = 0;
      let bestDist = Infinity;
      for (let idx = 0; idx < slideCount; idx++) {
        const faceAngle = normalizeDeg(idx * anglePerSlide);
        const dist = minimalAngularDistance(rotDeg, faceAngle);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = idx;
        }
      }

      // If that distance ≤ halfSlice, and it differs from the current frontRef,
      // update both state and ref so next callback sees the new value
      if (bestDist <= halfSlice && bestIdx !== frontRef.current) {
        setFrontIndex(bestIdx);
        frontRef.current = bestIdx;
      }

      lastXRef.current = x;
    },
    [anglePerSlide, halfSlice, slideCount]
  );

  // Handle pointer up (snap to nearest face)
  const handlePointerUp = useCallback(() => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    
    document.body.style.cursor = '';
    
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
    }

    window.removeEventListener('mousemove', handlePointerMove as any);
    window.removeEventListener('touchmove', handlePointerMove as any);
    window.removeEventListener('mouseup', handlePointerUp);
    window.removeEventListener('touchend', handlePointerUp);

    // Normalize the rotation, then find nearest index exactly as above
    const rotDeg = normalizeDeg(-rotationRef.current);
    let bestIdx = 0;
    let bestDist = Infinity;
    for (let idx = 0; idx < slideCount; idx++) {
      const faceAngle = normalizeDeg(idx * anglePerSlide);
      const dist = minimalAngularDistance(rotDeg, faceAngle);
      if (dist < bestDist) {
        bestDist = dist;
        bestIdx = idx;
      }
    }
    const nearestIndex = bestIdx;

    // Snap via the shortest 360° path
    const baseFace = normalizeDeg(nearestIndex * anglePerSlide);
    const currentAngle = rotationRef.current;
    const k = Math.round((currentAngle + baseFace) / 360);
    const targetAngle = - baseFace + k * 360;
    rotationRef.current = targetAngle;

    if (rotatingRef.current) {
      rotatingRef.current.style.transition = 'transform 0.5s ease';
      rotatingRef.current.style.transform = `rotateY(${rotationRef.current}deg)`;
      const onEnd = () => {
        if (rotatingRef.current) rotatingRef.current.style.transition = '';
        rotatingRef.current?.removeEventListener('transitionend', onEnd);
      };
      rotatingRef.current.addEventListener('transitionend', onEnd);
    }

    setCurrentIndex(nearestIndex);
  }, [anglePerSlide, slideCount, handlePointerMove]);

  // Handle pointer down (start drag)
  const handlePointerDown = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    draggingRef.current = true;
    
    document.body.style.cursor = 'grabbing'

    if (containerRef.current) {
      containerRef.current.style.cursor = 'grabbing';
    }

    const x = 'clientX' in e ? e.clientX : e.touches[0].clientX;
    lastXRef.current = x;

    // Remove any CSS transition so drag is instant
    if (rotatingRef.current) {
      rotatingRef.current.style.transition = '';
    }

    window.addEventListener('mousemove', handlePointerMove as any);
    window.addEventListener('touchmove', handlePointerMove as any, { passive: false });
    window.addEventListener('mouseup', handlePointerUp);
    window.addEventListener('touchend', handlePointerUp);
  };

  return (
    <div
      ref={containerRef}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        perspective: '3000px',
      }}
      className="relative mx-auto overflow-visible cursor-grab mt-50"
      onMouseDown={handlePointerDown}
      onTouchStart={handlePointerDown}
    >
      <div
        ref={rotatingRef}
        className="absolute inset-0"
        style={{
          transform: `rotateY(${rotationRef.current}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {slides.map((slide, idx) => {
          const baseW = Math.round(width * 0.6)
          const baseH = Math.round(height * 0.6)
          //const scaleFactor = idx === frontIndex ? 3 : 0.8
          //const thumbW = baseW * scaleFactor;
          //const thumbH = baseH * scaleFactor
          const thisAngle = idx * anglePerSlide;
          //const isFront = idx === frontIndex;
          return (
            <div
              key={slide.id}
              className="flex absolute inset-0 items-start justify-center"
              style={{
                transform: `rotateY(${thisAngle}deg) translateZ(${radius}px)`,
              }}
            >
              <div className="relative rounded-lg overflow-visible
                    transform transition-transform ease-in-out duration-1000 bg-[#05051e] flex-shrink-0 flex items-center justify-center "
                  style={{ width: `${600}px`, height: `${300}px`}}
                  >
                <Image
                  src={slide.imgSrc}
                  alt={slide.title}
                  fill
                  style={{ objectFit: 'contain' }}
                  quality={100}
                  //priority={isFront}
                  className="z-30 relative filter brightness-50"
                />
                <div className="flex flex-col items-center justify-center relative z-30 px-30 top-1/2 -translate-y-25">
                  <h3>
                    {slide.title}
                  </h3>
                  <h5 className="text-xs text-center">
                    {slide.shortDescription}
                  </h5>
                  <p className="text-2xs">
                    {slide.languagesUsed}
                  </p>
                  <a href={slide.link} target="_blank" rel="noopenber nopreferrer">
                    <FaGithub className="w-4 h-4"/>
                  </a>
                </div>
              </div>
              {/* {isFront && (
                  <div className="mt-5 text-center">
                    <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded-md text-sm">
                      {slide.title}
                    </span>
                  </div>
                )} */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
