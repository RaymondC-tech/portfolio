import userBioChunks from './userBio'
import { embed } from './embed'

//describes an array of objects where each object must have a text property of type string and vector property which is an array of numbers
let embeddedChunks: { text: string, vector: number[] }[] | null = null; 

export async function getEmbeddedChunks(){
    if (embeddedChunks) return embeddedChunks;

    //for every chunk in bio, call embed(chunk) and turn it all in a vector
    //Promise.all() returns all parallel and waits until all are finished instead 
    // using await for every single chunk

    const vectors = await Promise.all(userBioChunks.map(embed)); 

    embeddedChunks = userBioChunks.map((text, i) => ({
        text,
        vector: vectors[i],
    }));

    return embeddedChunks

}