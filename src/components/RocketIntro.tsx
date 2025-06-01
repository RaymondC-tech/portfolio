'use client'

import { useState } from 'react'; //track when roket has launch
import { motion, AnimatePresence } from 'framer-motion'
//motion for animating elements and AnimatePresence ahndles exit animation and conditional rendering with animation
import Image from 'next/image';
import Starfield from './Starfield'


export default function RocketIntro({ onComplete }: { onComplete: () => void }){ //deconstructing props
    //RocketIntro component expects single prop called onComplete and must be a function that takes no arguements and returns nothing
    //onComplete: () => void   type annotation that tells the shape of prop
    const [launched, setLaunched] = useState(false)
    const [imageError, setImageError] = useState(false)

    const handleLaunch = () => {
        setLaunched(true);
        setTimeout(() => {
            onComplete(); //notify parent intro id done
        }, 2000); // Reduced to 2 seconds to match animation duration
    }

    return (
        <AnimatePresence mode="wait">
         {!launched && (
            <motion.div
                key="rocket-intro"
                className="fixed inset-0 w-full h-screen bg-black overflow-hidden flex flex-col justify-end items-center"
                exit={{ opacity: 0 }}
            >
                <Starfield/>
                {/* Rocket Container */}
                <div className="absolute bottom-20 w-full h-[200px] flex justify-center">
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={launched ? { y: '-200%' } : { y: '100%' }}
                        transition={{ 
                            duration: 2,
                            ease: "easeInOut"
                        }}
                        className="relative z-20"
                    >
                        {imageError ? (
                            <div className="w-[100px] h-[100px] bg-red-500 flex items-center justify-center text-white">
                                Rocket Image
                            </div>
                        ) : (
                            <Image 
                                src="/rocketImg.png" 
                                alt="rocket" 
                                width={100} 
                                height={100}
                                className="transform -translate-y-1/2"
                                onError={() => setImageError(true)}
                                priority
                            />
                        )}
                    </motion.div>
                </div>

                {/* Ground */}
                <div className="absolute bottom-0 w-full h-1 bg-white"/>

                {/* Launch Button */}
                <motion.button
                    onClick={handleLaunch}
                    className="absolute bottom-20 bg-red-600 text-white px-6 py-3 rounded-full z-30"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Launch to Raymond's portfolio
                </motion.button>
            </motion.div>
         )}
        </AnimatePresence>
    );
}
       