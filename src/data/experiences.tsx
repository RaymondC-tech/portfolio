import {Experiences} from '@/types/Experiences'
export const experienceData: Experiences[] = [
    {
        id: 1,
        organization: "Fairloft",
        title: "Software Engineer Intern",
        description: [
            <>Co-developing the MVP for <span className='text-[#8A2BE2] font-bold'>Fairloft</span>, a scroll-first golf marketplace and AI-powered coaching platform, using <span className='text-[#8A2BE2] font-bold'>Next.js</span>, <span className='text-[#8A2BE2] font-bold'>TypeScript</span> and <span className='text-[#8A2BE2] font-bold'>Firebase</span></>,
            <>Implementing core systems including <span className='text-[#8A2BE2] font-bold'>secure authentication</span>, <span className='text-[#8A2BE2] font-bold'>B2C price comparison</span>, and <span className='text-[#8A2BE2] font-bold'>C2C geo-verified listings</span> to improve buyer trust, reduce fraud, and streamline purchasing decisions</>,
            <>Collaborating with a cross-functional team to integrate <span className='text-[#8A2BE2] font-bold'>real-time data scraping</span>, <span className='text-[#8A2BE2] font-bold'>Mapbox-based location filtering</span>, and <span className='text-[#8A2BE2] font-bold'>trust-based seller verification</span>, building infrastructure designed to scale with growing product and user demand</>
        ],
        date: "July 2025 - Present",
        imageSrc: "/experience_image/fairloft_logo.jpeg"
    },
    {
        id: 2,
        organization: "UoftMarket",
        title: "Software Developer",
        description: [
            <>Co-developed a full-stack student marketplace used by <span className='text-[#8A2BE2] font-bold'>500+</span> UofT students, leveraging <span className='text-[#8A2BE2] font-bold'>TypeScript</span>, <span className='text-[#8A2BE2] font-bold'>React</span>, <span className='text-[#8A2BE2] font-bold'>Supabase</span>, and <span className='text-[#8A2BE2] font-bold'>Tailwind CSS</span> to enable secure listings for textbooks, furniture, and electronics</>,
            <>Led <span className='text-[#8A2BE2] font-bold'>100%</span> in the development of the mobile app using <span className='text-[#8A2BE2] font-bold'>React Native</span> and <span className='text-[#8A2BE2] font-bold'>Expo</span>, achieving feature parity with the web version</>,
            <>Designed and launched the <span className='text-[#8A2BE2] font-bold'>Requests</span> system, allowing students to post what they need and match with sellers, contributing to <span className='text-[#8A2BE2] font-bold'>20%</span> month-over-month growth in platform activity</>
        ],
        date: "March 2025 - Present",
        imageSrc: "/experience_image/uoftmarket_logo.jpg"
    },    
    {id: 3,
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
    {id: 4,
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