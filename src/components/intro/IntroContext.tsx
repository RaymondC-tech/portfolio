'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

type IntroContextType = {
    introDone: boolean;
    setIntroDone: (done: boolean) => void;
}

const IntroContext = createContext<IntroContextType | undefined>(undefined);

export const IntroProvider = ({ children }: {children: ReactNode }) => {
    const [introDone, setIntroDone] = useState<boolean>(false);
    return (
        <IntroContext.Provider value={{introDone, setIntroDone }}>
            {children}
        </IntroContext.Provider>
    );
};

export const useIntro = () => {
    const ctx = useContext(IntroContext);
    if (!ctx) {
        throw new Error(`useIntro must be used within IntroProvider`)
    }
    return ctx;
}