import { Slide } from '@/types/Slide'

export const slidesData: Slide[] = [
    {
        id: 1,
        title: "Wattup",
        imgSrc: "/project_image/wattup.png",
        link: "https://github.com/hieuletainguyen/DeltahackXI",
        shortDescription: "A community-driven EV platform that optimizes charging \
        with smart scheduling, dynamic pricing, voice commands, and QR-based bookings.",
        languagesUsed: "DJANGO, TYPESCRIPT, MONGODB, PYTHON"

    },
    {
        id: 2,
        title: "AntiTetris",
        imgSrc: "/project_image/antitetris.jpg",
        link: "https://github.com/enxilium/antitetris",
        shortDescription: "Cybersecurity game for users to butcher opponents' progress and defend against cyber attacks.",
        languagesUsed: "WEBSOCKETS, NEXTJS"

    },
    {
        id: 3,
        title: "SafeSteps",
        imgSrc: "/project_image/safesteps.png",
        link: "https://github.com/RaymondC-tech/SafeSteps",
        shortDescription: "Google map but for finding safe and suitable walking paths for pedestrians ",
        languagesUsed: "REACT, MONGODB, FASTAPI"

    },
    {
        id: 4,
        title: "Caffio",
        imgSrc: "/project_image/caffio.png",
        link: "https://github.com/RaymondC-tech/Caffio",
        shortDescription: "Coffee tracking app for consumers be more aware about their coffee intake",
        languagesUsed: "REACT, FIREBASE, POSTGRESSQL"

    },
    {
        id: 5,
        title: "StuddyBuddy",
        imgSrc: "/project_image/studdybuddy.jpg",
        link: "https://github.com/RaymondC-tech/study-budy",
        shortDescription: "AI-powered study companion that chats with you, generates quizzes and flashcards, tracks posture and hydration, and helps you stay focused like a real friend",
        languagesUsed: "NEXTJS, FIREBASE, OPENCV"
    }
]


{/*   
    export interface Slide {
    id: number,
    title: string;
    imgSrc: string;
    link: string
}
    
    */}
