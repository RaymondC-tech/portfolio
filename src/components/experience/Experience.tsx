import {Experiences } from '@/types/Experiences'

interface ExpereinceComponentProps {
  exp: Experiences,
  index: number
}


export default function Experience({exp, index}: ExpereinceComponentProps) {

  const sideClass = index % 2 === 0 ? 'w-1/2 mr-auto pr-[10%]' : 'w-1/2 ml-auto pl-[5%]'
  return (
    <div className= {`border border-white rounded-lg ${sideClass}`}>
        <div className="text-5xl text-white font-bold">
          {exp.title}
        </div>

        <div className="text-4xl text-white">
          {exp.organization}
        </div>

        {exp.description.map((e, idx) => (
          <div className="text-3xl text-white"
              key={idx}
          >
            {`- ${e}`}
          </div>
        ))}
      
    </div>
  )
}
