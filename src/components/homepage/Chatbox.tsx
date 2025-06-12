'use client'

import React, { useState, useRef, useEffect } from 'react'
import { FaArrowUp } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { useIntro } from '@/components'

const Chatbox = () => {
    const [messages, setMessages] = useState<{role: 'user' | 'ai', content: string, isTyping?: boolean }[]>([
        {
            role: 'ai',
            content: "Ask me anything about my experience, projects and hobbies! Also, feel free to connect with me above!"
        }
    ]); /* keeps list of chat messages, typsecript at the end */
    const [input, setInput] = useState('');  //keeps track of what is in textbox
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const handleSubmit = async (e: React.FormEvent) => { 
        e.preventDefault();  //stops page from reloading after press enter on form
        if (!input.trim()) return; // if textbox empty or just spaces do nothing
    

        //Add user message
        const newMessages = [...messages, { role: 'user' as const, content: input }];
        setMessages(newMessages); //adds users message to the list

        //and typing placeholder
        setMessages((prev) => [...prev, {role: 'ai', content: "...", isTyping: true}])
        setInput('') //clears input box
        
        
        try {
            const res = await fetch("/api/ai", {
                method: "POST",
                headers: { //tell server format data sending
                    "Content-Type": "application/json" //means ur sending json object
                },
                body: JSON.stringify({ message: input }) //actual data
            });

            const data =  await res.json(); //reads data from server and parse into javascript objeect
            const aiMessage = data.response;

            typeWriter(aiMessage, (chunk) => {
                setMessages((prev) => [
                    ...prev.slice(0, -1), //remove typing indicator,
                    {role:  'ai', content: chunk}
                ]);
            });


        } catch (err) {
            console.error(err);
            const aiFailedMessage = "Error, try again"
            typeWriter(aiFailedMessage, (chunk) => {
                setMessages((prev) => [
                    ...prev.slice(0, -1), //remove typing indicator,
                    {role:  'ai', content: chunk}
                ]);
            });
            
        }
    };

    const typeWriter = (text: string, callback: (chunk: string) => void, delay=20) => {
        let index = 0
        const type = () => {
            if (index <= text.length) {
                callback(text.slice(0, index));
                index++;
                setTimeout(type, delay);
            }
        };
        type()
    };

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth'})
        }
    }, [messages]);

  return (
    <div className="w-full max-w-7xl mx-auto mt-10 p-4 border border-[#202124] rounded-lg bg-[#202124] shadow z-10">
        <div className="h-64 overflow-y-auto space-y-2 mb-4 p-2 h-100 custom-scrollbar">
            {messages.map((m, i) => ( //m is message, i is index
                <div key={i} className={`text-lg ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                    {m.isTyping ? (
                        //dot animation
                        <div className="flex space-x-1">
                            <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:.1s]"></span>
                            <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:.2s]"></span>
                            <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:.3s]"></span>
                        </div>
                    ): (
                    <span 
                    className={`inline-block px-3 py-1 rounded ${m.role === 'user' ? 'bg-[#40414F] rounded-full ' : 'bg-[#202124]'}`}
                    dangerouslySetInnerHTML={{ __html: m.content }}
                    />
 
                    )}
                </div>    
            ))}
            <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSubmit} className="w-full " >  
            <div className="relative w-full  border border-[#565869] rounded-xl px-4 py-3 pr-12 bg-[#343541] text-lg ">
                <textarea 
                    value={input} //keeps input synced with state
                    onChange={(e) => { setInput(e.target.value)} } //updates state when you
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSubmit(e)
                        }
                    }}
                    rows={1}
                    className="w-full resize-none overflow-hidden bg-transparent text-[#8E8EA0] focus:outline-none text-lg" 
                    placeholder="Whats on your mind?.."
                    onInput={(e) => {
                        e.currentTarget.style.height = 'auto';
                        e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`
                    }}
                />
                <button 
                    type="submit" 
                    className="absolute right-3 bottom-3 bg-white text-black w-8 h-8 rounded-full flex items-center justify-center text-sm shadow hover:shadow-md"
                > 
                    <FaArrowUp />
                </button> 
            </div>
        </form> 
    </div>
    );
};

export default Chatbox