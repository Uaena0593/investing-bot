import React from 'react'
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>
    <nav className="p-4 bg-gray-200">
        <div className="container mx-auto flex justify-between items-center padding">
          <div className="flex-shrink-0">
            <span className="text-black text-xl">time toi make some money!!!!!!</span>
          </div>
          <div className="flex items-center space-x-12">
            <input type='text' placeholder="find stock" className="bg-gray-300 pl-5 h-10 w-96 border-transparent rounded-full focus:outline-none" />
            <Link to="/" className="text-black no-underline text-xl">
              home
            </Link>
            <Link to="/about" className="text-black no-underline text-xl">
              about
            </Link>
            <Link to = '/signup'>
                holy poggers
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar