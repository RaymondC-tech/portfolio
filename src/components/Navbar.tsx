import React from 'react'

const Navbar = () => {
  return (
    <nav className = "flex justify-between items-center z-10 top-0">
      {/* left half*/}
      <div className="w-1/2 flex justify-center">
        <button className="text-white">Raymond</button>
      </div>

      {/* Right half*/}
      <div className = "w-1/2 flex justify-evenly">
      <button className="hover:underline text-white">Home</button>
        <button className="hover:underline text-white">About</button>
        <button className="hover:underline text-white">Experience</button>
        <button className="hover:underline text-white">Projects</button>
      </div>
        
    </nav>
  )
}

export default Navbar