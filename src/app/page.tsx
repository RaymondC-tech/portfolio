'use client'

import {useState} from 'react';
import {Chatbox, Button, TypingIntro, Navbar} from '@/components'
//import RocketIntro from '@/components'

export default function HomePage() {
  // const [showMainContent, setShowMainContent] = useState(false);

  return (
    <main className="relative min-h- pt-16">
      {/* 
              {!showMainContent ? (
                <RocketIntro onComplete={() => setShowMainContent(true)} />
              ) : (
                <>
                  <Navbar />
                  <div className="relative z-10">
                    <TypingIntro/>
                    <Chatbox/>
                    <Button/>
                  </div>
                </>
              )}
      */}
      <>
        
        <div className="relative z-10">
          <TypingIntro/>
          <Chatbox/>
          <Button/>
        </div>
      </>
    </main>
  )
};