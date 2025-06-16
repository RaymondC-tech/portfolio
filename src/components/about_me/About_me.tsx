
import { VscTriangleRight } from "react-icons/vsc";
import { experienceData } from '@/data/experiences'
import Image from 'next/image'

const exp = experienceData[0]
const technoloiges = ["TypeScript", "Python", "Java", "Next.js", "Go", "C"]

export default function About_me() {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center w-full overflow-visible mb-8 mt-8">

      {/*Collum 1 */}
      <div className="flex justify-center overflow-visible pr-4">
        <div className="relative w-1/2 ">
          <div className="inline-flex items-center text-6xl font-bold overflow-visible">
          <p className="mb-3">
            I'm a Computer Science student at the <span className="font-bold font-weight-700"> University of Toronto </span>, 
            passionate about full-stack development and machine learning. I love building tools 
            that automate my life and make everyday tasks easier.
            </p>
            {/* <p>
              Here are some languages and technologies I have been using */}
            {/* </p>
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
              {technoloiges.map((language, idx) => (
                <li key = {idx} className="flex items-center gap-2">
                  <VscTriangleRight/> { language }
                </li>
              ))}
            </ul>
            <p>
              Beside coding 24/7, I an interested in reading articles about extraterrestrial 
              phenomenas and playing a variety of 
              enjoy playing sports 
            </p> */}

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
          className=" rounded-full opacity-0"
        />

      </div>

      {/*Empty collumn 3 */}
      <div className="flex justify-center pl-4">
        
      </div>

     
        
    </div>
  )
}

//<VscTriangleRight />