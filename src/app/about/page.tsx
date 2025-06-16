
'use client'

import { SectionTitle, About_me } from "@/components"



export default function page() {
  return (
    <main className="min-h-screen max-w-8xl mx-auto px-4 pt-16 overflow-auto custom-scrollbar">
        <SectionTitle text="About me" underlineWidthClass="w-32"/>

        <div className="relative">
          <About_me/>
        </div>
      
        
    </main>
  )
}