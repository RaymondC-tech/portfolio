//useState for hold current visible text and index of typing
//useEffect to run code after each render (to type each letter)
'use client'
import React, { useEffect, useState} from 'react';
import { IoMdMail } from "react-icons/io";
const lines = [
    "Welcome I\'m Raymond",
    "I like to build stuff occasionally",
    "I'm a Computer Science student at the University of Toronto, passionate about full-stack development and machine learning. I love building tools that automate my life and make everyday tasks easier."
];


const TypingIntro = () => {
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] =  useState(0);
    const [typedLines, setTypedLines] = useState(["","",""])
    const [showButton, setShowButton] = useState(false);


    useEffect(() => {
        if (lineIndex >= lines.length) {
            setShowButton(true);
            return;
        }

        let timeout: NodeJS.Timeout;
        if (charIndex < lines[lineIndex].length) {
            timeout = setTimeout(() => {
                const currentChar = lines[lineIndex][charIndex];
                setTypedLines(prev => {
                    const updated = [...prev];
                    updated[lineIndex] += currentChar;
                    return updated;
                });
                setCharIndex(prev => prev + 1);
            }, 50);
        } else {
            timeout = setTimeout(() => {
                setLineIndex(prev => prev + 1);
                setCharIndex(0);
            }, 600);
        }
        return () => clearTimeout(timeout);
    }, [charIndex, lineIndex]);

    return (
        <div className="text-center text-white space-y-4 mt-40">
            <h1 className="text-4xl font-bold">{typedLines[0]}{lineIndex === 0 && <Cursor />}</h1>
            <h2 className="text-2xl">{typedLines[1]}{lineIndex === 1 && <Cursor />}</h2>
            <p className="max-w-xl mx-auto text-gray-300">{typedLines[2]}{(lineIndex === 2 || lineIndex === 3) && <Cursor />}</p>
            <div className={`flex justify-center transition-opacity duration-1000 ${showButton ? 'opacity-100': 'opacity-0'}`}>
                <a href="mailto:raymondch49@gmail.com" className="flex items-center">
                    <button className="flex items-center gap-2 px-4 py-2 border-white border-4 rounded hover:bg-gray-700">
                        <IoMdMail/>
                        Lets connect!
                    </button>
                </a>
            </div> 
        </div>
    )
}

const Cursor = () => {
    return <span className=" w-[2px] h-6 bg-white animate-blink ml-1 align-middle" />;
};

export default TypingIntro