import { ReactNode } from 'react'

export interface Experiences {
    id: number,
    organization: string,
    title: string,
    description: React.ReactNode[],
    date: string,
    imageSrc: string

}