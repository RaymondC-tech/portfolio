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
        setMessages((prev) => [...prev, {role: 'ai', content: "", isTyping: true}])
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
        <div className="w-full max-w-4xl mx-auto mt-10 p-4 rounded-2xl bg-black/50 backdrop-blur-lg border border-white/20 shadow-lg">
          {/* Messages container */}
          <div className="flex-1 h-[400px] overflow-y-auto space-y-2 mb-4 p-2 custom-scrollbar">
            {messages.map((m, i) => (
              !m.isTyping && m.content.trim() !== "" && (
                <div
                key={i}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {/* Optionally animate message entry with Framer Motion if desired */}
                <div
                  className={`
                    inline-block
                    px-4 py-2
                    rounded-2xl
                    max-w-[70%]
                    leading-relaxed
                    text-lg
                    ${m.role === 'user'
                      ? 'bg-gray-700/80 text-white'
                      : 'bg-gray-800/80 text-white border-l-4 border-cyan-400/70'}
                  `}
                  // Keep dangerouslySetInnerHTML as before
                  dangerouslySetInnerHTML={{ __html: m.content }}
                />
              </div>
              )
              
            ))}
            {/*
              Typing indicator row: show three bouncing dots in accent color
              when m.isTyping is true. We assume at most one typing indicator in messages.
            */}
            {messages.some(m => m.isTyping) && (
              <div className="flex justify-start"> 
                {/* If you want typing indicator aligned left for AI; adjust justify-end if you want on right */}
                <div className="flex px-4 py-2 rounded-2xl bg-gray-800/80 max-w-[20%]">
                  <div className="flex space-x-1">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:.1s]" />
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:.2s]" />
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:.3s]" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
      
          {/* Input area */}
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex items-center bg-black/40 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
                rows={1}
                 className="flex-1 bg-transparent text-white placeholder-gray-400 resize-none focus:outline-none text-lg leading-tight no-scrollbar"
                
                placeholder="What’s on your mind?"
                onInput={(e) => {
                  e.currentTarget.style.height = 'auto';
                  e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
                }}
              />
              <button
                type="submit"
                className="ml-2 bg-cyan-400 hover:bg-cyan-500 text-black w-8 h-8 flex items-center justify-center rounded-full shadow-md"
              >
                <FaArrowUp />
              </button>
            </div>
          </form>
        </div>
      );
      
};

export default Chatbox