import {Chatbox, Button, TypingIntro} from '@/components'

export default function HomePage() {
  return (
    <main className="flex-col item-center justify-center min-h-screen">
      <TypingIntro/>
      <Chatbox/>
      <Button/>
    </main>
  )
}