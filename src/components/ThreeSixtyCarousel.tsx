'use client'

import React, { useState, useEffect, useRef } from 'react';
import { Slide } from '@/types/Slide'
import Image from 'next/image';

interface ThreeSixtyCarouselProps {
    slides: Slide[]; 
    width?: number;  //width of slide
    height?: number;  //height of slide
    radius?: number; //distance from center to slide face in (px)
    autoRotateInterval?: number; //ms between auto-rotation steps
}

export default function ProjectCarousel( { 
    slides,
    width = 200,
    height = 200,
    radius = 300, 
    autoRotateInterval = 5000,
}: ThreeSixtyCarouselProps) {

    const containerRef = useRef<HTMLDivElement | null>(null);

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    // absolute rotation in degree of entire carousel wrapper
    const [rotation, setRotation] = useState<number>(0);

    //drag-tracking state
    const [dragging, setDragging] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const [startRotation, setStartRotation] = useState<number>(0);

    const slideCount = slides.length;
    const anglePerSlide = 360 / slideCount;

    //1. When currentIndex changes, snap `rotation` to exactly currentIndex x anglePerSlide
    useEffect(() => {
        setRotation(currentIndex * anglePerSlide)
    }, [currentIndex, anglePerSlide])

    //2. Auto-rotate every autoRotateInterval milliseconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slideCount);
        }, autoRotateInterval);

        return () => {
            clearInterval(timer);
        };
    }, [slideCount, autoRotateInterval])

    //3. drag start (mousedown / touchstart)
    const handlePointerDown = (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault();
        setDragging(true);

        //hide built in cursor during drag for "grabbing effect"
        if (containerRef.current) {
            containerRef.current.style.cursor = 'grabbing';
        }

        //record initial pointer x
        const xPos = 'clientX' in e ? e.clientX: e.touches[0].clientX;
        setStartX(xPos);

        //record rotation at moment of mousedown
        setStartRotation(rotation);
    };

    //4. Drag move (mousemove / touch move)
    const handlePointerMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!dragging) return;

        const xPos = 'clientX' in e ? e.clientX : e.touches[0].clientX;
        const deltaX = xPos - startX;

        //convert horizontal drag distance to degrees ( can expereince with sensitivity)
        // 1px of horizontal drag = 0.5 degree rotation
        const newRotation = startRotation + deltaX * 0.3;
        setRotation(newRotation);
    };

    //5.drag end (mouseup / touchend)-> snap to nearest slide
    const handlePointerUp = () => {
        setDragging(false);

        if (containerRef.current) {
            containerRef.current.style.cursor = 'grab';
        }

        //compure which slide index we neareted to after dragging
        //round to nearest integer of rotation / anglePerSlide
        let rawIndex = rotation / anglePerSlide;

        rawIndex =  rawIndex % slideCount

        // rawIndex might be negative or > slideCount. Normalize it:
        if (rawIndex < 0) rawIndex += slideCount;

        //round to nearest integer
        const nearestIndex = Math.round(rawIndex) % slideCount;
        setCurrentIndex(nearestIndex)
    };

    //6. helper for user hover on front-facing slide, show tis title and scale up
    const isFrontSlide = (idx: number) => {
        return idx === currentIndex;
    };



  return (
    <div
    ref = {containerRef}
    //Make outer wrapper a fixed square (or rectangle)
    style={{ width: `${width}px`, height: `${height}px`, perspective: '1000px'}}
    className={`relative mx-auto overflow-visible cursor-grab`}
    onMouseDown={handlePointerDown}
    onMouseMove={handlePointerMove}
    onMouseUp={handlePointerUp}
    onMouseLeave={dragging ? handlePointerUp: undefined}
    onTouchStart={handlePointerDown}
    onTouchMove={handlePointerMove}
    onTouchEnd={handlePointerUp}
    >
        {/* Inner rotating cylinder wrapper
            We apply rotateY = -rotation (negative so that positive drag rotates the carousel in the correct rotation */}
        <div
            className="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `rotateY(${-rotation}deg)`,
                     transformStyle: 'preserve-3d'
                }}
        >
            {slides.map((slide, idx) => {
                //each slide rotated by idx * anglePerSlide, the moved out by "radius"
                const thisAngle = idx * anglePerSlide

                //Is this the "front" slide? If so, we'll enlarghe it and show the title below
                const front = isFrontSlide(idx)

                return (
                    <div
                        key={slide.id}
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                            transform: `rotateY(${thisAngle}deg) translateZ(${radius}px)`,
                        }}
                    >
                        {/* actual slide image */}
                        <div className="relative flex flex-col items-center">
                            <img
                                src={slide.imgSrc}
                                alt={slide.title}
                                className={`object-cover rounded-lg transition-transform duration-300
                                    ${front ?'scale-110 shadow-2xl' : 'scale-90 opacity-70'}
                                    `}
                                style={{
                                    width: `${width * 0.6}px`,
                                    height: `${height * 0.6}px`
                                }}
                                //only front image is hoverable\
                                onMouseEnter={() => {
                                    if (front) containerRef.current?.classList.add('cursor-pointer');
                                }}
                                onMouseLeave={() => {
                                    if (front) containerRef.current?.classList.remove('cursor-pointer')
                                }}
                            />
                            {/*only renbder project title if this slide is front */}
                            {front && (
                                <div className='absolute bottom-[-1.5rem] text-center'>
                                    <span className="bg-black bg-opacity-50 text-white px-3 py-1 rounded-md text-sm">
                                        {slide.title}
                                    </span>
                                </div>   
                            )}
                        </div>    
                    </div>    
                );
            })}
        </div>
    </div>
  );
}