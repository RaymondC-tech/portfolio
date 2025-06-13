'use client'
import {Experiences } from '@/types/Experiences'
import { MdArrowLeft } from "react-icons/md";
import { MdArrowRight } from "react-icons/md";
import Image from 'next/image'
import {motion} from 'framer-motion'

interface ExpereinceComponentProps {
  exp: Experiences,
  index: number
}


export default function ExperienceItem({exp, index}: ExpereinceComponentProps) {


  const isLeft = index % 2 === 1
  //const sideClass = index % 2 === 0 ? 'w-1/2 mr-auto pr-[10%]' : 'w-1/2 ml-auto pl-[5%]'

  const slideProps = {
    initial: {opacity: 0, x: isLeft ? -100 : 100},
    whileInView: { opacity: 1, x: 0},
    viewport: {once: true, amount: 0.5},
    transition: {duration: 0.6, ease: 'easeOut'}
  }

  return (
    //3 collumn approach
    <div className="grid grid-cols-[1fr_auto_1fr] items-center w-full mt-[5vh]">
      {/*left collumn */}
      {isLeft ? (
        <motion.div {...slideProps} className='flex justify-center pr-4'>
          <div className="relative border border-white border-5 rounded-3xl px-[2vw] py-[2vh] w-1/2 transform transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-700">

            {/*arrow */}
            <div className="absolute top-1/2 right-0 transform translate-x-8 -translate-y-1/2">
              <MdArrowRight className="text-white text-5xl"/>
            </div>


            {/*main bodyu and text */}
              <h2 className="text-white text-4xl font-bold">
                  {exp.title}
              </h2>

              <h5 className=" text-white mt-[1vh] text-xl">
                {exp.organization}
              </h5>

              <div className="mt-[1vh] space-y-[0.5vh]">
                {exp.description.map((e, idx) => (
                  <p
                  key={idx}
                  className="text-white text-base"
                  >
                    {`-  ${e}`}
                  </p>
                ))}
              </div> 
          </div> 
        </motion.div>
        
      ) : (
        <div/>
      )}
      {/*middle collumn */}
      <motion.div 
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      viewport={{once: true, amount: 0.5}}
      transition={{duration: 0.6, delay: 0.2}}
      
      className=" relative flex justify-center items-center z-20 border rounded-full border-4">
      <Image
          src={exp.imageSrc}
          alt={exp.title}
          width={130}
          height={130}
          className=" rounded-full"
        />
          <span className={`whitespace-nowrap flex absolute top-1/2 transform -translate-y-1/2 text-lg text-white 
            ${isLeft ? 'translate-x-100' : '-translate-x-100'}`}> {exp.date}</span>
      </motion.div>
      {/*right collumn */}
      <div className="flex justify-center pl-4">
        {!isLeft && (
          <motion.div {...slideProps} className="relative border border-white border-5 rounded-3xl px-[2vw] py-[2vh] w-1/2 transform transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-700">
            {/* arrow */}
            <div className="absolute top-1/2 left-0 transform -translate-x-8 -translate-y-1/2">
              <MdArrowLeft className="text-white text-5xl"/>
            </div>

            {/* main boyd and text */}

            <h2 className="text-white text-4xl font-bold">
              {exp.title}
            </h2>
        
            <h5 className=" text-white mt-[1vh] text-xl">
              {exp.organization}
            </h5>
            <div className="mt-[1vh] space-y-[0.5vh]">
              {exp.description.map((e, idx) => (
                <p className=" text-white text-base"
                  key={idx}
                >
               {`- ${e}`}
             </p>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

