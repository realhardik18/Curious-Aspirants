import React from 'react'

function Navbar() {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 bg-black bg-opacity-50 backdrop-blur-sm border-b border-white border-opacity-10">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold text-white">DPP Maker</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#features" className="text-white hover:text-gray-300 transition duration-300">Features</a></li>
          <li><a href="#about" className="text-white hover:text-gray-300 transition duration-300">About</a></li>
          <li><a href="#contact" className="text-white hover:text-gray-300 transition duration-300">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
  )
}

export default Navbar