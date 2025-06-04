import { Slide } from '@/types/Slide'
import Image from 'next/image'

export const slidesData: Slide[] = [
    {
        id: 1,
        title: "Wattup",
        imgSrc: "/wattup.jpg",
        link: "https://github.com/hieuletainguyen/DeltahackXI"

    },
    {
        id: 2,
        title: "AntiTetris",
        imgSrc: "/antitetris.jpg",
        link: "https://github.com/enxilium/antitetris"

    },
    {
        id: 3,
        title: "SafeSteps",
        imgSrc: "/safesteps.png",
        link: "https://github.com/RaymondC-tech/SafeSteps"

    },
    {
        id: 4,
        title: "Caffio",
        imgSrc: "/caffio.png",
        link: "https://github.com/RaymondC-tech/Caffio"

    },
    {
        id: 5,
        title: "Simply",
        imgSrc: "/simply.png",
        link: "https://github.com/RaymondC-tech/Simply"
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
