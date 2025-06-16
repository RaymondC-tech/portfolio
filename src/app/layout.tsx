

import type { Metadata } from "next";
import "./globals.css";
import {Starfield, Navbar, MouseGlow} from '@/components'
import { LoadingProvider, useLoading } from './LoadingContext'
import { IntroProvider } from '@/components'

// function RootLayoutContent({ children }: { children: React.ReactNode}) {
//   //const { isLoaded } = useLoading()
//   return (
//     <>
//     <Starfield/>
//     <Navbar />
//     {children}
//     </>
//   )
// }

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-hidden text-white">
        <IntroProvider>
          <Navbar/>
          <Starfield/>
          <main>{children}</main>
          {/*<MouseGlow/> */}

        </IntroProvider>
      </body>
    </html>
  );
}
