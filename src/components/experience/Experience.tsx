import {Experiences } from '@/types/Experiences'
import { MdArrowLeft } from "react-icons/md";
import { MdArrowRight } from "react-icons/md";
import Image from 'next/image'

interface ExpereinceComponentProps {
  exp: Experiences,
  index: number
}


export default function Experience({exp, index}: ExpereinceComponentProps) {


  const isLeft = index % 2 === 1
  //const sideClass = index % 2 === 0 ? 'w-1/2 mr-auto pr-[10%]' : 'w-1/2 ml-auto pl-[5%]'
  return (
    //3 collumn approach
    <div className="grid grid-cols-[1fr_auto_1fr] items-center w-full mt-[5vh]">
      {/*left collumn */}
      {isLeft ? (
        <div className="flex justify-center pr-4">
          <div className="relative border border-white border-5 rounded-xl px-[2vw] py-[2vh] w-2/5">

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
        </div>
      ) : (
        <div/>
      )}
      {/*middle collumn */}
      <div className=" relative flex justify-center items-center z-20 border rounded-full border-4">
      <Image
          src={exp.imageSrc}
          alt={exp.title}
          width={130}
          height={130}
          className=" rounded-full"
        />
          <span className={`absolute top-1/2 transform -translate-y-1/2 text-sm text-white ${isLeft ? 'translate-x-100' : '-translate-x-100'}`}> {exp.date}</span>
      </div>
      {/*right collumn */}
      <div className="flex justify-center pl-4">
        {!isLeft && (
          <div className="relative border border-white border-5 rounded-xl px-[2vw] py-[2vh] w-2/5">
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
          </div>
        )}
      </div>
    </div>

    // <div className="mt-[2vh] mx-[5vw] ">
    //   <div className="relative z-30 rounded-lg">
    //   <Image
    //       src={exp.imageSrc}
    //       alt={exp.title}
    //       width={130}
    //       height={130}
    //       className="block mx-auto translate-y-30 rounded-full"
    //     >
    //     </Image>
    //     <div className = {`absolute pt-10 ${isLeft === true ? 'right-100': 'left-50'}`}>
    //       exp.date
    //     </div>
    //   </div>
    //   <div className= {`relative border border-white border-5 rounded-xl px-[2vw] ${isLeft === true? 'w-1/3 mr-auto':  'w-1/3 ml-auto'}`}>
      
    //     <div className={`${isLeft === true? 'absolute right-0 translate-x-8 translate-y-1/5':'absolute left-0 -translate-x-8 translate-y-1/5'}`}>
    //       {isLeft === true? <MdArrowRight className="text-5xl"></MdArrowRight> : <MdArrowLeft className="text-5xl"></MdArrowLeft>}
    //     </div>
    //     <h2 className="text-white text-4xl font-bold mt-[2vh]">
    //       {exp.title}
    //     </h2>
        

    //     <h5 className=" text-white mt-[1vh] text-xl">
    //       {exp.organization}
    //     </h5>
    //     <div className="mb-[2vh]">
    //       {exp.description.map((e, idx) => (
    //         <p className=" text-white mt-[0.5vh]"
    //             key={idx}
    //         >
    //           {`- ${e}`}
    //         </p>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    
  )
}
