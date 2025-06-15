'use client'

import { Slide } from '@/types/Slide'
import { ThreeSixtyCarousel, SectionTitle } from '@/components';
import { slidesData } from '@/data/slides'
import { motion } from 'framer-motion'


// interface ProjectCarouselProps {
//     slides: Slide[];
// }

export default function ProjectsPage() {
  return (
    <main className="max-w-8xl mx-auto px-4 md:px-8 pt-16 ">
      <motion.div
        initial={{opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeInOut'}}
      >
        <SectionTitle text="Projects"  underlineWidthClass= "w-32"/>
      </motion.div>
      
      <motion.div
        initial={{opacity: 0, y: 100}} //start 20 px below normal
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 0.8, ease: 'easeInOut'}}
      >
        <section className="mb-16">
          <ThreeSixtyCarousel slides={slidesData}/>
        </section>
      </motion.div>    
    </main>
  )
}