import type { Metadata } from "next";
import "./globals.css";
import {Starfield, Navbar} from '@/components'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-hidden text-white">
        <Navbar/>
        <Starfield/>
        {children}
      </body>
    </html>
  );
}
