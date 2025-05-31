import * as tf from '@tensorflow/tfjs';
import * as use from '@tensorflow-models/universal-sentence-encoder'

// Initialize TensorFlow.js backend
await tf.setBackend('cpu');
await tf.ready();


let model: use.UniversalSentenceEncoder | null = null;

export async function loadModel() {
    if (!model) {
        model = await use.load()
    }
    return model;
}

export async function embed(text: string): Promise<number[]> {
    const model = await loadModel()
    const embeddings = await model.embed([text]); //runs embedding model on a array of 1 string returning tensor of shape [1, 512]
    const array = await embeddings.array(); //convert tensor into regular javascript array
    return array[0]; //extract single embedding vector (number of array of length 512)
}