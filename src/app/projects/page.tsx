import { Slide } from '@/types/Slide'
import { ThreeSixtyCarousel } from '@/components';
import { slidesData } from '@/data/slides'

interface ProjectCarouselProps {
    slides: Slide[];
}

export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 md:px-8 py-12">
      <section className="mb-16">
        <ThreeSixtyCarousel slides={slidesData}/>
      </section>
    </main>
  )
}