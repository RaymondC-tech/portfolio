import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className = " flex-wrap flex justify-between items-center z-10 top-0 mx-100">
    
      {/* left half*/}
      <div className="flex items-center gap-5">
        <button className="text-white text-lg">Raymond</button>
        <button className="hover:underline text-white">Home</button>
        <button className="hover:underline text-white">About</button>
        <button className="hover:underline text-white">Experience</button>
        <button className="hover:underline text-white">Projects</button>
      </div>

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

