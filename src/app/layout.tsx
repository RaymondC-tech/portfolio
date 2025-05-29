import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Starfield} from '@/components';


export const metadata: Metadata = {
  title: "Raymond Chan portfolio",
  description: "Portfolio site",
};

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
        { children }
      </body>
    </html>
  );
}
