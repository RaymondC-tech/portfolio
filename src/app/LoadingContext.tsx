'use client'
import { createContext, useContext, useState } from 'react'

interface LoadingCtx {
    isLoaded: boolean
    setLoaded: (v: boolean) => void
}

const LoadingContext = createContext<LoadingCtx | null>(null)

export function LoadingProvider({ children }: { children: React.ReactNode }) {
    const [isLoaded, setLoaded] = useState<boolean>(true)
    return (
        <LoadingContext.Provider value={{isLoaded, setLoaded }}>
            {children}
        </LoadingContext.Provider>
    )
}

export function useLoading(){
    const ctx = useContext(LoadingContext)
    if (!ctx) throw new Error('useLoading must be inside LoadingProvider')
    return ctx
}