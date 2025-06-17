import {Experiences} from '@/types/Experiences'
export const experienceData: Experiences[] = [
    {id: 1,
    organization: "Recess Hacks",
    title: "Organizer",
    description: [
  <>Secured <span className='text-[#8A2BE2] font-bold'>$150,000+</span> in sponsorships from industry-leading companies, enabling larger prizes, workshops, and outreach</>,

  <>Expanded international reach, attracting <span className='text-[#8A2BE2] font-bold'>200+</span> participants from <span className='text-[#8A2BE2] font-bold'>10+</span> countries through targeted marketing and partnerships</>,

  <>Led a remote organizing team of <span className='text-[#8A2BE2] font-bold'>15+</span> volunteers across 5 time zones, coordinating event logistics, tech, and operations</>,
        ],
    date: "June 2024 - September 2024",
    imageSrc:"/experience_image/recesshacks_logo.jpg"
    },
    {id: 2,
        organization: "Mathnasium Markham",
        title: "Math Instructor",
        description: 
            [
            <>Maintained an average parent satisfaction rating of <span className='text-[#8A2BE2] font-bold'>95%</span> based on regular progress reports and feedback</>,
            <>Designed and led personalized math tutoring sessions for students ranging from elementary to high school</>,
            <>Assisted in onboarding and mentoring <span className='text-[#8A2BE2] font-bold'>5+</span> new instructors, helping standardize teaching quality</>
            ],
        date: "August 2023 - July 2024",
        imageSrc:"/experience_image/mathnasium_logo.jpg"
    }
]


/*export interface Experience {
    id: number,
    organization: string,
    title: string,
    description: string[];

} */

    //<span className='text-[#8A2BE2] font-bold'></span>$