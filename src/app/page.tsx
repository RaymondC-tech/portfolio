import {Chatbox, Button, TypingIntro} from '@/components'

export default function HomePage() {
  return (
    <main className="flex-col item-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">
        Welcome to my Portfolio
      </h1>
      <TypingIntro/>
      <Chatbox/>
      <Button/>
    </main>
  )
}