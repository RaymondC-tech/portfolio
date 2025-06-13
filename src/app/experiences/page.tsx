import { experienceData } from '@/data/experiences'
import { ExperienceItem, SectionTitle } from '@/components'


export default function ExperiencePage() {
  const imagesrc = ['/recesshacks_logo.jpg','/mathnasium_logo.jpg' ]
  return (
    <main className="min-h-screen max-w-8xl mx-auto px-4 pt-16">
      <SectionTitle text = "Experience" underlineWidthClass= "w-32"/>
      <div className="flex justify-center mt-20 text-5xl">
      Work Experience Timeline
      </div>
      <div className="absolute left-1/2 top-65 h-full w-px bg-white transform -translate-x-1/2 z-5"/>
      <div className="mt-65">
        {experienceData.map((e) => (
        <ExperienceItem key={e.id} exp={e} index={e.id}>

        </ExperienceItem>
      ))}
      </div>
      
    </main>
  )
}