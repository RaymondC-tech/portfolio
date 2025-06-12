'use client'

import {useState} from 'react';
import {useIntro, Chatbox, Button, TypingIntro} from '@/components'
import { IoMdMail } from "react-icons/io";
import { AnimatePresence, motion } from 'framer-motion';

export default function HomePage() {
  // const [showMainContent, setShowMainContent] = useState(false);
  const {introDone, setIntroDone} = useIntro();

  return (
    <main className="relative">

      {!introDone ? (
        //centering wrapper when intro not done
        <div className="inset-0 flex items-center justify-center absolute pt-130">
          {/*only animate the small text */}
          <motion.div
          layoutId="introText"
          transition={{type: "spring", stiffness: 80, damping: 20}}
          >
            <TypingIntro onComplete={() => setIntroDone(true)}/>
          </motion.div>
        </div>
      ) : (
        <div className="flex items-center justify-center relative">
            <motion.div
              layoutId="introText"
              transition={{type: "spring", stiffness: 80, damping: 20}}
            >
              <TypingIntro onComplete={() => {}}/>
            </motion.div>
        </div>
      )}
  
      {introDone && (
        <motion.div
        className={`relative transition-opacity duration-700 ease-in-out`}
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{duration: 0.7, delay: 0.2}}
        >
          <div className="mt-8 text-center space-y-4">
          <p className="max-w-xl mx-auto text-gray-300 text-xl">
            I'm a Computer Science student at the University of Toronto, passionate about full-stack development and machine learning. I love building tools that automate my life and make everyday tasks easier.
          </p>
          <div className={`flex justify-center`}>
              <a href="mailto:raymondch49@gmail.com" className="flex items-center">
                  <button className="flex items-center gap-2 px-4 py-3 text-xl border-white border-4 rounded hover:bg-gray-700">
                      <IoMdMail/>
                      Lets connect!
                  </button>
              </a>
          </div> 
          <div className="w-full max-w-5xl mx-auto px-4">
            <Chatbox/>
          </div>
            <Button/> 
          </div>
        </motion.div>
          )}
    </main>
  )
};