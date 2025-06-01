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
    const [showContent, setShowContent] = useState(true) //for AnimatePresence to unmount

    const handleLaunch = () => {
        setLaunched(true);
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
                    <motion.div
                        initial={{ y: 0 }}
                        animate={launched ? { y: '-120vh' } : { y: 0 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="relative z-20 border border-red-500"
                    > 
                        <Image 
                            src="/rocketImg.png" 
                            alt="rocket" 
                            width={100} 
                            height={100}
                            priority
                        />
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
       