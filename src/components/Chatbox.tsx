'use client'

import React, { useState, useRef, useEffect } from 'react'

const Chatbox = () => {
    const [messages, setMessages] = useState<{role: 'user' | 'ai', content: string }[]>([]); /* keeps list of chat messages, typsecript at the end */
    const [input, setInput] = useState('')  //keeps track of what is in textbox

    const handleSubmit = async (e: React.FormEvent) => { 
        e.preventDefault();  //stops page from reloading after press enter on form
        if (!input.trim()) return; // if textbox empty or just spaces do nothing
    

        //Add user message
        const newMessages = [...messages, { role: 'user' as const, content: input }];
        setMessages(newMessages); //adds users message to the list
        setInput('') //clears input box
        
        try {
            const res = await fetch("http://127.0.0.1:8000/chat", {
                method: "POST",
                headers: { //tell server format data sending
                    "Content-Type": "application/json" //means ur sending json object
                },
                body: JSON.stringify({ message: input }) //actual data
            });

            const data =  await res.json(); //reads data from server and parse into javascript objeect
            const aiMessage = data.reply;

            setMessages((prev) => [...prev, { role: 'ai', content: aiMessage}])

        } catch (err) {
            setMessages((prev) => [...prev, {role: 'ai', content: "Error"}])
        }


        // //Simulate AI responce
        // const response = generateFakeReply(input);
        // setTimeout(() => { //simuulate delay like real AI reply
        //     setMessages((prev) => [...prev, { role: 'ai', content: response }]);
        // }, 300); //adds fake response to list
    };

    const generateFakeReply = (msg: string) => { //fake ai response for now
        if (msg.toLowerCase().includes("experience")) return "Worked on your mom"
        if (msg.toLowerCase().includes("hobbies")) return "your mama"
        return "your mom"
    };

  return (
    <div className="w-full max-w-2xl mx-auto mt-10 p-4 border border-gray-300 rounded-lg bg-white shadow z-10">
        <div className="h-64 overflow-y-auto space-y-2 mb-4 p-2 bg-gray-100 rounded">
            {messages.map((m, i) => ( //m is message, i is index
                <div key={i} className={`text-sm ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                    <span className={`inline-block px-3 py-1 rounded ${m.role === 'user' ? 'bg-blue-200' : 'bg-gray-300'}`}>
                        {m.content}
                    </span>
                </div>    
            ))}
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2">  
            <input 
                type="text"
                value={input} //keeps input synced with state
                onChange={(e) => { setInput(e.target.value)} } //updates state when you 
                className="flex-1 border rounded px-3 py-2 text-black " placeholder="Ask me anything :)"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 rounded"> Enter </button> 
        </form> 
    </div>
    );
};

export default Chatbox;