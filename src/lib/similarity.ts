function cosineSimilarit(a: number[], b: number[]){
    const dot = a.reduce((sum, ai, i) => sum + ai * b[i], 0);
    const normA = Math.sqrt(a.reduce((sum, ai) => sum + ai * ai, 0));
    const normB = Math.sqrt(b.reduce((sum, bi) => sum + bi * bi, 0))
    return dot / (normA * normB)
}

export function getTopK(queryVec: number[], embeddedChunks: { text: string, vector: number[] }[], k = 3) {
    return embeddedChunks.map(chunk => ({ //new array with { text, score}
        text: chunk.text,
        score: cosineSimilarit(queryVec, chunk.vector),
    }))
    .sort((a,b) => b.score - a.score)
    .slice(0, k)
    .map(c => c.text);
}