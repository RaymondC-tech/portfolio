'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react';
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
    width = 300,
    height = 200,
    radius = 600, 
    autoRotateInterval = 5000,
}: ThreeSixtyCarouselProps) {

    const containerRef = useRef<HTMLDivElement | null>(null);

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [frontIndex, setFrontIndex] = useState<number>(0);

    const rotationRef = useRef(0);


    // draggingRef to know if we're in an active drag. lastXRef to track last pointer X
    const draggingRef = useRef(false);
    const lastXRef =  useRef(0);

    const slideCount = slides.length;
    const anglePerSlide = 360 / slideCount;

    //on mount, set initial transform so it matches RotationRef( ==0)
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.style.transform='rotateY(0deg)';
        }
    }, []);

    //1. When currentIndex changes, snap `rotation` to exactly currentIndex x anglePerSlide
    useEffect(() => {

        //find number of full 360 cycles
        const cycles = Math.round(rotationRef.current / 360);

        //compute face angle for new index
        const targetFace = currentIndex * anglePerSlide;

        rotationRef.current = targetFace + cycles * 360;
        if (containerRef.current){
            containerRef.current.style.transform = `rotateY(${rotationRef.current}deg)`;
        }
        setFrontIndex(currentIndex)
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
    const handlePointerMove = useCallback((evt: MouseEvent | TouchEvent) => {
        
        //only do something if we are dragging
        if (!draggingRef.current) return;

        //prevent default scrolling/pinch on mobile
        evt.preventDefault()

        const x = evt instanceof MouseEvent ? evt.clientX : evt.touches[0].clientX;
        const dx = x - lastXRef.current; //number of px moved since last event

        //adjsut senitivity 
        const sensitivity = 0.1;
        rotationRef.current += dx * sensitivity

        //apply immediate transform
        if (containerRef.current){
            containerRef.current.style.transform = `rotateY(${rotationRef.current}deg)`
        }

        let rawFront = rotationRef.current / anglePerSlide;
        rawFront = rawFront % slideCount;
        if (rawFront < 0) rawFront += slideCount;
        const newFront = Math.round(rawFront) % slideCount;
        if (newFront != frontIndex) {
            setFrontIndex(newFront);
        }

        //update lastXRef
        lastXRef.current = x;

    }, [anglePerSlide, frontIndex, slideCount])

    const handlePointerDown = (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault();
        draggingRef.current = true;

        //hide built in cursor during drag for "grabbing effect"
        if (containerRef.current) {
            containerRef.current.style.cursor = 'grabbing';
        }

        //record initial pointer x
        const xPos = 'clientX' in e ? e.clientX: e.touches[0].clientX;


        //record rotation at moment of mousedown
        lastXRef.current = xPos;

        //add global listeners so we follow pointer even if it leaves the container
        window.addEventListener('mousemove', handlePointerMove as any);
        window.addEventListener('touchmove', handlePointerMove as any, { passive: false});
        window.addEventListener('mouseup', handlePointerUp);
        window.addEventListener('touchend', handlePointerUp);
    };

    //4. Drag move (mousemove / touch move)
    // const handlePointerMove = (e: React.MouseEvent | React.TouchEvent) => {
    //     if (!dragging) return;

    //     const xPos = 'clientX' in e ? e.clientX : e.touches[0].clientX;

    //     //compute how many px moved since last event
    //     const dx = xPos - lastX;

    //     //adjsut senitivity 
    //     const sensitivity = 0.2
    //     setRotation((r) => r + dx * sensitivity)

    //     //update lasteX so next move will be relative to this position
    //     setLastX(xPos)
    // };

    //5.drag end (mouseup / touchend)-> snap to nearest slide
    const handlePointerUp = useCallback(() => {
        if (!draggingRef.current) return;

        draggingRef.current = false;

        if (containerRef.current) {
            containerRef.current.style.cursor = 'grab';
        }

        window.removeEventListener('mousemove', handlePointerMove as any);
        window.removeEventListener('touchmove', handlePointerMove as any);
        window.removeEventListener('mouseup', handlePointerUp);
        window.removeEventListener('touchend', handlePointerUp);


        //compure which slide index we neareted to after dragging
        //round to nearest integer of rotation / anglePerSlide
        let rawIndex = rotationRef.current / anglePerSlide;

        rawIndex = rawIndex % slideCount;

        // rawIndex might be negative or > slideCount. Normalize it:
        if (rawIndex < 0) rawIndex += slideCount;

        //round to nearest integer
        const nearestIndex = Math.round(rawIndex) % slideCount;
        setCurrentIndex(nearestIndex)

    }, [anglePerSlide, slideCount, handlePointerMove]);



  return (
    <div
    ref = {containerRef}
    //Make outer wrapper a fixed square (or rectangle)
    style={{ width: `${width}px`, height: `${height}px`, perspective: '1000px'}}
    className={`relative mx-auto my-50 overflow-visible cursor-grab`}
    onMouseDown={handlePointerDown}
    onTouchStart={handlePointerDown}
    >
        {/* Inner rotating cylinder wrapper
            We apply rotateY = -rotation (negative so that positive drag rotates the carousel in the correct rotation */}
        <div
            className="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `rotateY(${rotationRef.current}deg)`,
                     transformStyle: 'preserve-3d'
                }}
        >
            {slides.map((slide, idx) => {
                //each slide rotated by idx * anglePerSlide, the moved out by "radius"
                const thisAngle = idx * anglePerSlide

                //Is this the "front" slide? If so, we'll enlarghe it and show the title below
                const front = idx === frontIndex;

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
                            <Image
                                width={width * 0.6}
                                height={height}
                                src={slide.imgSrc}
                                alt={slide.title}
                                className={`object-cover rounded-lg transition-transform duration-300
                                    ${front ?'scale-110 shadow-2xl' : 'scale-90 opacity-70'}
                                    `}
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