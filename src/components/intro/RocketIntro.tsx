'use client'

import { useState } from 'react'; //track when roket has launch
import { motion, AnimatePresence } from 'framer-motion'
//motion for animating elements and AnimatePresence ahndles exit animation and conditional rendering with animation
import Image from 'next/image';
import {Starfield} from '@/components'


export default function RocketIntro({ onComplete }: { onComplete: () => void }){ //deconstructing props
    //RocketIntro component expects single prop called onComplete and must be a function that takes no arguements and returns nothing
    //onComplete: () => void   type annotation that tells the shape of prop
    const [launched, setLaunched] = useState(false)
    const [showContent, setShowContent] = useState(true) //for AnimatePresence to unmount
    const [showButton, setShowButton] = useState(true)
 
    

    const handleLaunch = () => {
        setLaunched(true);
        setShowButton(false);
        setTimeout(() => {
            setShowContent(false) //trigger AnimationPresence exit
        }, 2000); // Reduced to 2 seconds to match animation duration
    }

    return (
        <AnimatePresence mode="wait" onExitComplete={onComplete}>
         {showContent && (
            <motion.div
                key="rocket-intro"
                className="fixed inset-0 w-full h-screen overflow-hidden flex flex-col justify-end items-center z-50"
                exit={{ opacity: 0 }}
            >
                <Starfield/>
                {/* Rocket Container */}
                <div className="absolute bottom-20 w-full h-[200px] flex justify-center">
                    {launched && (
                            <>
                                {[...Array(10)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{
                                    opacity: 0.8,
                                    scale: 0.9,
                                    y: 0,
                                    x: (Math.random() - 0.5) * 300 // spread left/right randomly
                                    }}
                                    animate={{
                                    opacity: 0,
                                    scale: 3,
                                    y: -100,
                                    }}
                                    transition={{
                                    duration: 2,
                                    delay: i * 0.1, // staggered delay
                                    ease: "easeOut",
                                    }}
                                    className="absolute bottom-0 left-1/2 w-40 h-24 bg-gray-400/80 rounded-full blur-xl -translate-x-1/2 z-10"
                                />
                                ))}
                            </>
                        )}

                    <motion.div
                        initial={{ y: 0 }}
                        animate={launched ? { y: '-120vh' } : { y: 0 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="relative z-20"
                    > 

                        <Image 
                            src="/rocketImg.png" 
                            alt="rocket" 
                            width={100} 
                            height={100}
                        />
                    </motion.div>
                </div>

                {/* Ground */}
                <div className="absolute translate-y-70 flex justify-center translate-x-15">
                    <div className="w-[1000px]">
                        <Image
                            src="/ground.png"
                            alt="ground"
                            width={1000}
                            height={1}
                        />
                    </div>
                </div>
                <div className="absolute bottom-0 w-full h-1 bg-white z-30"/>
                    <>
                    {showButton && (        
                        <motion.button
                            onClick={handleLaunch}
                            className="absolute bottom-200 h-45 w-45 animate-flash rounded-full bg-red-600 text-white text-3xl 
                            font-bold flex items-center justify-center shadow-[0_0_30px_rgba(255,0,0,0.7)] hover:shadow-[0_0_50px_rgba(255,0,0,1)] transition-shadow duration-300 z-30"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Launch 
                        </motion.button>
                    )}
                    </>
            </motion.div>
         )}
        </AnimatePresence>
    );
}
       