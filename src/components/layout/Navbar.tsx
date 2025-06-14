'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { useIntro } from '@/components'
import { usePathname } from 'next/navigation'

const Navbar: React.FC = () => {
  const { introDone } = useIntro()
  const pathname = usePathname()

  // Determine if we should show the nav (e.g., hide on home until introDone)
  const showNav = pathname !== '/' || introDone

  // Mobile menu state
  const [mobileOpen, setMobileOpen] = useState(false)

  // Helper to detect active link
  const isActive = (href: string) => {
    // exact match or startsWith logic as needed
    return pathname === href
  }

  // Links array for easier mapping
  const navLinks: { name: string; href: string }[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Experience', href: '/experiences' },
    { name: 'Projects', href: '/projects' },
  ]

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        bg-black/70 backdrop-blur-sm
        transition-opacity duration-500 ease-in-out
        ${showNav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
    >
      {/* Container: max width, centered */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">   {/* All cuase of the justify-between that pushes first element ot left and right element all the way to right */}
          {/* Left: Brand + desktop links */}
          <div className="flex items-center">
            {/* Brand */}
            <Link href="/" className="text-white text-xl font-bold whitespace-nowrap">
              Raymond Chan
            </Link>

            {/* Desktop menu: hidden on small */}
            <ul className="hidden sm:flex sm:ml-8 sm:space-x-6 whitespace-nowrap"> {/* space-x-6 adds left margin to every element after the first*/}
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`
                      text-white hover:underline
                      ${isActive(link.href) ? 'underline text-cyan-400' : ''}
                    `}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: social icons or mobile menu button */}
          <div className="flex items-center">
            {/* Desktop icons */}
            <div className="hidden sm:flex sm:space-x-4">
              <a href="mailto:raymondch49@gmail.com" aria-label="Email">
                <MdEmail className="w-6 h-6 text-white hover:text-cyan-400" />
              </a>
              <a
                href="https://github.com/RaymondC-tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6 text-white hover:text-cyan-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/rchan49/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6 text-white hover:text-cyan-400" />
              </a>
            </div>

            {/* Mobile menu button: shown on small screens */}
            <button
              className="sm:hidden inline-flex items-center justify-center p-2 text-white hover:text-cyan-400"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/*Mobile dropdown menuy if open */}
      { mobileOpen && (
        <div className="sm:hidden bg-black/80 backdrop-blur-sm">
          <ul className='px-4 pt-2 pb-4 space-y-2'>
            { navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`
                    block text-white py-1
                    ${isActive(link.href) ? 'underline text-cyan-400' : 'hover: underline'}
                    `}
                  onClick={() => setMobileOpen(false)} //close it
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-gray-700">
              <div className="flex space-x-4 mt-2">
                <a href="mailto:raymondch49@gmail.com" aria-label="Email">
                  <MdEmail className="w-6 h-6 text-white hover:text-cyan-400" />
                </a>
                <a
                  href="https://github.com/RaymondC-tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-6 h-6 text-white hover:text-cyan-400" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rchan49/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-6 h-6 text-white hover:text-cyan-400" />
                </a>
              </div>
            </li>
          </ul>
          <div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
