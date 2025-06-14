' use client'

import { experienceData } from '@/data/experiences'
import Image from 'next/image'

interface SectionTitleProps {
    text: string,
    underlineWidthClass?: string //e.g w-24 
}
const exp = experienceData[0]

export default function SectionTitle({ text, underlineWidthClass = "w-24" }: SectionTitleProps) {
  return (

    <div className="grid grid-cols-[1fr_auto_1fr] items-center w-full overflow-visible mb-8 mt-8 ">

      {/*Collumn 1 */}
      <div className="flex justify-center overflow-visible pr-4">
        <div className="relative w-1/2 ">
          <div className="inline-flex items-center text-6xl font-bold overflow-visible">
            <span className="mr-2">/</span>
            <span>{text}</span>

            {/*Underlkine stays in-flow but can overflow into col 2 */}
            <span
              className={`
                ml-4 
                ${underlineWidthClass} 
                h-px 
                bg-gray-600
              `}
            />

            </div>
        </div>
       
      </div>
      
      {/*Empty collumn 2 */}
      <div className="w-10px -z-20">
      <Image
          src={exp.imageSrc}
          alt={exp.title}
          width={130}
          height={130}
          className=" rounded-full"
        />

      </div>

      {/*Empty collumn 3 */}
      <div className="flex justify-center pl-4">
        
      </div>
    </div>
  )
}
