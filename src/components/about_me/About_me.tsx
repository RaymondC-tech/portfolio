
import { VscTriangleRight } from "react-icons/vsc";
import { experienceData } from '@/data/experiences'
import Image from 'next/image'

const exp = experienceData[0]
const technoloiges = ["TypeScript", "Python", "Java", "Next.js", "Go", "C"]

export default function About_me() {
  return (
    <div className="w-full max-w-[1800px] mx-auto grid grid-cols-2 gap-12 px-8 mt-8 mb-8 items-center">

    <div >

      <p className="text-3xl leading-relaxed">
            I'm a Computer Science student at the <span className="font-bold font-weight-700 text-cyan-500"> University of Toronto </span>, 
            passionate about <span className="font-bold font-weight-700 text-cyan-500"> full-stack development </span> and <span className="font-bold font-weight-700 text-cyan-500">machine learning</span>. I love building tools 
            that automate my life and make everyday tasks easier.
      </p>

      <p className="text-2xl mt-3">
        Here are some languages and technologies I have been using 
      </p>
        <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-xl mt-3">
          {technoloiges.map((language, idx) => (
            <li key = {idx} className="flex items-center gap-2">
              <VscTriangleRight className="text-cyan-500"/> { language }
            </li>
          ))}
        </ul>
        <p className="text-2xl mt-3">
          Beside coding 24/7, I an interested in reading articles about extraterrestrial 
          phenomenas and playing a variety of 
          enjoy playing sports 
        </p>
    </div>

    {/*Right side */}
    <div className="flex justify-center">
    <Image
          src={exp.imageSrc}
          alt={exp.title}
          width={130}
          height={130}
          className=" rounded-full border-4 border-white"
        />

    </div>


     

  
        
    </div>
  )
}

//<VscTriangleRight />