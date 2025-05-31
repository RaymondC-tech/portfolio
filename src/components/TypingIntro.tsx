//useState for hold current visible text and index of typing
//useEffect to run code after each render (to type each letter)
'use client'
import React, { useEffect, useState} from 'react';
const lines = [
    "Welcome, I'm Raymond",
    "I like to build stuff occasionally",
    "I'm a Computer Science student at the University of Toronto, passionate about full-stack development and machine learning. I love building tools that automate my life and make everyday tasks easier. Always excited to connect and collaborate!"
];


const TypingIntro = () => {
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] =  useState(0);
    const [typedLines, setTypedLines] = useState(["","",""])


    useEffect(() => {
        if (lineIndex >= lines.length) return; //all lines down

        if (charIndex < lines[lineIndex].length){
            const timeout = setTimeout(() => {
                setTypedLines(prev => {
                    const updated = [...prev];
                    updated[lineIndex] += lines[lineIndex][charIndex];
                    return updated;
                });
                setCharIndex(prev => prev + 1);
        }, 50);
        } else {
            //finished line, wait to move onto next
            const delay = setTimeout(() => {
                setLineIndex(prev => prev + 1);
                setCharIndex(0);
            }, 600);
            return () => clearTimeout(delay);
        }
    }, [charIndex, lineIndex]);

    return (
        <div className="text-center text-white space-y-4">
            <h1 className="text-4xl font-bold">{typedLines[0]}{lineIndex === 0 && <Cursor />}</h1>
            <h2 className="text-2xl">{typedLines[1]}{lineIndex === 1 && <Cursor />}</h2>
            <p className="max-w-xl mx-auto text-gray-300">{typedLines[2]}{lineIndex === 2 && <Cursor />}</p>
        </div>
    )
}

const Cursor = () => {
    return <span className="inline-block w-[2px] h-6 bg-white animate-blink ml-1 align-middle" />;
};

export default TypingIntro