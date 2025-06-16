
'use client'

import { SectionTitle, About_me } from "@/components"
import { motion } from 'framer-motion'



export default function page() {
  return (
    <main className="min-h-screen max-w-8xl mx-auto px-4 pt-16 overflow-auto custom-scrollbar">
      <motion.div
      initial={{opacity : 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.8, ease: 'easeInOut'}}

      >
        <SectionTitle text="About me" underlineWidthClass="w-32"/>
      </motion.div>
        
      <motion.div
        initial={{opacity: 0, y: 100 }}
        animate={{opacity: 1, y: 0 }}
        transition={{duration: 0.8, ease: 'easeInOut'}}
      >
        <About_me/>
      </motion.div> 
    </main>
  )
}