import { experienceData } from '@/data/experiences'
import { ExperienceItem, SectionTitle } from '@/components'


export default function ExperiencePage() {
  const imagesrc = ['/recesshacks_logo.jpg','/mathnasium_logo.jpg' ]
  return (
    <main className="min-h-screen max-w-8xl mx-auto px-4 pt-16">
      <SectionTitle text = "Experience" underlineWidthClass= "w-32"/>
      <div className="flex justify-center mt-20 text-5xl">

      </div>

      
      <div className="relative">
        <div className="absolute left-1/2 h-screen w-px bg-white transform -translate-x-1/2 z-5"/>
        <div className="mt-10">
          {experienceData.map((e) => (
          <ExperienceItem key={e.id} exp={e} index={e.id}>

          </ExperienceItem>
        ))}
        </div>
      </div>
      
      
    </main>
  )
}