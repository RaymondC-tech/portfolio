'use client'

import {useState} from 'react';
import {Chatbox, Button, TypingIntro, Navbar, Starfield} from '@/components'
import RocketIntro from '@/components/RocketIntro'

export default function HomePage() {
  const [showMainContent, setShowMainContent] = useState(false);

  return (
    <main className="relative min-h-screen">
      {!showMainContent ? (
        <RocketIntro onComplete={() => setShowMainContent(true)} />
      ) : (
        <>
          <Navbar />
          <Starfield />
          <div className="relative z-10">
            <TypingIntro/>
            <Chatbox/>
            <Button/>
          </div>
        </>
      )}
    </main>
  )
};