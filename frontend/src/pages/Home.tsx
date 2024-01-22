import React from 'react'
import NavBar from '../components/NavBar'

const Home = () => {
  return (
    <>
        <section className="bg-gray-200 min-h-screen flex flex-col">
            <NavBar/>
            <div className="flex items-center justify-center">
                <div className = 'text-5xl mt-60'>investment profile</div>
            </div>
        </section>
    </>
  )
}

export default Home