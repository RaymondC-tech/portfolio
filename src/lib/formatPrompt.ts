import userContext from './userBio'

export function formatPrompt(userMessage: string): string {
    return `${userContext} \n Current question: `
}