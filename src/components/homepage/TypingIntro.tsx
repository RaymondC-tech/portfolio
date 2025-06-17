//useState for hold current visible text and index of typing
//useEffect to run code after each render (to type each letter)
'use client'
import React, { useEffect, useState} from 'react';
import { useIntro } from '@/components'

type TypingIntroProps = {
    onComplete: () => void;
}
const lines = [
    "welcome, raymond here.",
    "I like to build stuff occasionally.",
];


const TypingIntro: React.FC<TypingIntroProps> = ({ onComplete }) => {
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] =  useState(0);
    const [typedLines, setTypedLines] = useState(["",""])
    const [doneSignaled, setDoneSignaled] = useState(false);
    const { introDone } = useIntro();


    useEffect(() => {
        if (introDone) {
            setTypedLines(lines);
            return;
        }
        if (lineIndex >= lines.length) {
            if (!doneSignaled) {  //doneSignaled is to invoke that this typing intro only happens once when it is initially font / loaded first tiem on page, if page re-rendered, dont call onComplete
                setDoneSignaled(true)
                setTimeout(() => {
                    onComplete()
                }, 300);
            }

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
    }, [charIndex, lineIndex, introDone, doneSignaled, onComplete]);

    const fullFirstLine = lines[0]
    const name = "raymond"
    const [prefix, suffix] = fullFirstLine.toLowerCase().split(name); //splits lowercase string around substring stored in name where everyting before raymond is first elelmetn and evertying after is second element

    
    //part typed so far
    const typed = typedLines[0];

    //break it up into up-to-three pieces:
    const prefixText = typed.slice(0, prefix.length);

    //only color up to as many letters of "raymnond" has been typed
    const nameText = typed.slice(prefix.length, Math.min(typed.length, prefix.length + name.length))

    //any characters after name
    const suffixText = typed.slice(prefix.length + name.length)

    return (
        <div className="text-center text-white space-y-4 mt-40">
            <h1 className="text-7xl font-bold">
                {prefixText}
                <span className="text-rose-600">
                    {nameText}
                </span>
                {suffixText}
                {lineIndex === 0 && <Cursor/>}
            </h1>
            
            {/*<h1 className="text-7xl font-bold font-weight: 700">{typedLines[0]}{lineIndex === 0 && <Cursor />}</h1>*/}
            <h2 className="text-4xl">{typedLines[1]}{(lineIndex === 1 || lineIndex === 2) && <Cursor />}</h2>


            
        </div>
    )
}

const Cursor = () => {
    return <span className=" w-[2px] h-6 bg-white animate-blink ml-1 align-middle" />;
};

export default TypingIntro