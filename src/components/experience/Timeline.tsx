'use client'
import {ExperienceItem} from '@/components'
import { Experiences } from '@/types/Experiences'

interface TimelineProps {
    items: Experiences[]
}

export default function Timeline({ items }: TimelineProps) {
    return (
        <div className="relative">
            {/* Central vertical line */}
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full hidden md:block w-px">
                <div className="space-y-12">
                    {items.map((exp, idx) => (
                        <ExperienceItem key={idx} exp={exp} index={idx}>

                        </ExperienceItem>
                    ))}
                    
                </div>

            </div>

        </div>
    )

}