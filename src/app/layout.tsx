'use client'

import type { Metadata } from "next";
import "./globals.css";
import {Starfield, Navbar, Background1} from '@/components'
import { LoadingProvider, useLoading } from './LoadingContext'

function RootLayoutContent({ children }: { children: React.ReactNode}) {
  const { isLoaded } = useLoading()
  return (
    <>
    *<Starfield/>
   

    {isLoaded && <Navbar />}
    {children}
    </>
  )
}

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <LoadingProvider>
        <body className="relative min-h-screen overflow-hidden text-white">
          <RootLayoutContent>
            {children}
          </RootLayoutContent>
        </body>
      </LoadingProvider>
    </html>
  );
}
