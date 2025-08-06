'use client'

import { experienceData } from '@/data/experiences'
import { ExperienceItem, SectionTitle } from '@/components'
import { motion } from 'framer-motion'


export default function ExperiencePage() {
  const imagesrc = ['/recesshacks_logo.jpg','/mathnasium_logo.jpg' ]
  return (
    <main className="w-full max-w-8xl mx-auto px-4 pt-16 pb-16">
      <motion.div
        initial={{opacity:0}}
        whileInView={{ opacity: 1}}
        viewport={{ once: true, amount: 0.5}}
        transition={{duration: 0.6, delay: 0.2}}
      >
        <SectionTitle text = "Experience" underlineWidthClass= "w-32"/>
        
        <div className="relative mt-20">
          <div className="absolute left-1/2 h-full w-px bg-white transform -translate-x-1/2 z-5"/>
          <div className="w-full max-w-[2200px] mx-auto px-8">
            {experienceData.map((e) => (
              <ExperienceItem key={e.id} exp={e} index={e.id}>
              </ExperienceItem>
            ))}
          </div>
        </div>
      </motion.div>
    </main>
  )
}