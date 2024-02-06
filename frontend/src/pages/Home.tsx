import React from 'react'
import NavBar from '../components/NavBar'
import googleButton from '../assets/google_signin_buttons/Web (mobile + desktop)/png@1x/dark/web_dark_rd_SI@1x.png'

function navigate(url) {
  window.location.href = url
}

async function auth(){
  const response = await fetch('http://127.0.0.1:3000/request', {method: 'POST'});
  const data = await response.json();
  navigate(data.url);
}
const Home = () => {
  return (
    <>
        <section className="bg-gray-200 min-h-screen flex flex-col">
            <NavBar/>
            <div className="flex items-center justify-center">
                <div className = 'text-5xl mt-60'>investment profile</div>
                <button type ="button" onClick={()=>auth()}>
                  <img src = {googleButton} alt ="google sign in"></img>
                </button>
            </div>
            
        </section>
    </>
  )
}

export default Home