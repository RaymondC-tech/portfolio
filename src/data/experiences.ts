import {Experiences} from '@/types/Experiences'

export const experienceData: Experiences[] = [
    {id: 1,
    organization: "Recess Hacks",
    title: "Organizer",
    description: 
        ["Directed the transformation of Recess Hacks 4.0, growing it from a small community event into a major international online hackathon",

        "Secured over $150,000 in sponsorships, attracting 200+ participants globally from 10+ countries, and collaborating with \
        partners to fund and support the event",

        "Managed a remote team to coordinate marketing, outreach, prize distribution, and competition structure to ensure smooth \
        execution"
        ],
    date: "06/2024 - 09/2024",
    imageSrc:"/experience_image/recesshacks_logo.jpg"
    },
    {id: 2,
        organization: "Mathnasium Markham",
        title: "Math Instructor",
        description: 
            ["Designed and led personalized math tutoring sessions for students ranging from elementary to high school",
    
            "Applied diverse teaching techniques to increase student comprehension and confidence in mathematics",
    
            "Collaborated with fellow instructors to assess student progress, adjusting teaching strategies for optimal learning outcomes"
            ],
        date: "08/2023 - 07/2024",
        imageSrc:"/experience_image/mathnasium_logo.jpg"
    }
]


/*export interface Experience {
    id: number,
    organization: string,
    title: string,
    description: string[];

} */