import React from 'react'
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>
    <nav className="ml-10 p-4 bg-colors-black1">
        <div className="container mx-auto flex justify-between items-center padding">
          <div className="flex items-center space-x-12">
            <Link to="/" className="text-white no-underline text-lg">
              home
            </Link>
            <Link to="/about" className="text-white no-underline text-lg">
              about
            </Link>
            <Link to = '/signup' className = "text-white text-lg">
                holy poggers
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar