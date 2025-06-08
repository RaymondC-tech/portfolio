import { experienceData } from '@/data/experiences'
import { Experience } from '@/components'


export default function ExperiencePage() {
  return (
    <main className="min-h-screen">
      <div className="absolute left-1/2 top-0 h-full w-px bg-white transform -translate-x-1/2">
      </div>
      {experienceData.map((e) => (
        <Experience key={e.id} exp={e} index={e.id}>

        </Experience>
      ))}
    </main>
  )
}