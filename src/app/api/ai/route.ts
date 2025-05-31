import { NextResponse } from 'next/server' //use to build http responses ion nextjs api router
                                            // for sending json back to the client
import { embed } from '@/lib/embed'
import { getEmbeddedChunks } from '@/lib/embed-chucks';
import { getTopK } from  '@/lib/similarity'
import clarification from '@/lib/promptClarification'

export async function POST(request: Request) { //post handler for route
    try {
        const body = await request.json(); //parses incomign data
        const message = body.message; //pulls text out of it
        
        if (!message) {
            return NextResponse.json({ error: 'Message is required'}, { status: 400})
        }

        const apiKey = process.env.GEMINI_API_KEY; //process.env gives access to enviornment variables

        if (!apiKey) {
            return NextResponse.json({ error: "API key is missing" }, {status: 500});
        }

        //1. embed user message
        const queryEmbedding = await embed(message);

        //2. load embeddded chunks of background info
        const embeddedChunks = await getEmbeddedChunks();
        
        //3. Find top relavent chunks
        const topChunks = getTopK(queryEmbedding, embeddedChunks, 2)

        //format final prompt
        const formattedPrompt = `${clarification}. 
        
        Information about Raymond: ${topChunks.join(`\n\n`)}
        Current question: ${ message }`;

        console.log(formattedPrompt)
        const geminiBody = { //builds endpoint url for gemini chat model
            contents: [
                {
                    role: "user",
                    parts: [{ text: formattedPrompt}]
                }
            ]
        };

        const geminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;


        //send request to gemini
        const response = await fetch(geminiEndpoint, { 
            //fetch(url, options like an object that defines things like method, headers, body)
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', //how your sending data
            },
            body: JSON.stringify(geminiBody) //actual data
        })
        
        const data = await response.json();
        console.log("data wrong", data)

        const text = data?.candidates?.[0].content?.parts?.[0]?.text || "I am not sure what you mean. Could you rephrase it?"

        return NextResponse.json({ response: text});

    } catch (error) {
        console.error("Error gemini api", error)
        return NextResponse.json({ error: "Fail to connect to Gemini API"}, { status: 500 });
    }
 }
