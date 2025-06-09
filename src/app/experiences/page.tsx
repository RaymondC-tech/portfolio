import { experienceData } from '@/data/experiences'
import { Experience } from '@/components'


export default function ExperiencePage() {
  const imagesrc = ['/recesshacks_logo.jpg','/mathnasium_logo.jpg' ]
  return (
    <main className="min-h-screen">
      <div className="flex justify-center mt-20 text-5xl">
      Work Experience Timeline
      </div>
      <div className="absolute left-1/2 top-65 h-full w-px bg-white transform -translate-x-1/2 z-5"/>
      <div className="mt-65">
        {experienceData.map((e) => (
        <Experience key={e.id} exp={e} index={e.id}>

        </Experience>
      ))}
      </div>
      
    </main>
  )
}