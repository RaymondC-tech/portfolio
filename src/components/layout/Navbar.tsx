'use client'

import React from 'react'
import Link from 'next/link'
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useIntro } from '@/components'

const Navbar = () => {
  const { introDone } = useIntro();
  return (
    <nav className = {`fix top-0 flex-wrap flex justify-between items-center z-40 top-0 mx-100 transition-opacity duration-500 ease-in-out
      ${introDone ? `opacity-100 pointer-events-auto` : `opacity-0 pointer-events-none`}`}>
    
      {/* left half*/}
      <ul className="flex items-center gap-5"
          aria-label="Main navigation"
      >
        <li>
          <Link href="/" className="text-white text-lg hover:underline font-weight: 700">
            Raymond Chan
          </Link>
        </li>
        <li>
          <Link href="/" className="text-white hover:underline">
            Home
          </Link>
        </li>
          <Link href="/about" className="text-white hover:underline">
            About
          </Link>
        <li>
          <Link href="/experiences" className='text-white hover:underline'>
            Experience
          </Link>
        </li>
        
        <li>
          <Link href="/projects" className="text-white hover:underline">
            Project
          </Link>
          
        </li>
      </ul>

      {/* Right half*/}
      <div className = "w-1/10 flex gap-5">
        <a href="mailto:raymondch49@gmail.com">
          <MdEmail className="w-6 h-6" />
        </a>
        <a href="https://github.com/RaymondC-tech" target="_blank" rel="noopenber nopreferrer">
          <FaGithub className="w-6 h-6"/>
        </a>
        <a href="https://www.linkedin.com/in/rchan49/" target="_blank" rel="noopener nopreferrer">
          <FaLinkedin className="w-6 h-6"/>
        </a>
      </div>
    </nav>
  )
}

export default Navbar

