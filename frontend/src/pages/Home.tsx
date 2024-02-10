import React from 'react'
import NavBar from '../components/NavBar'
import googleButton from '../assets/google_signin_buttons/Web (mobile + desktop)/png@1x/dark/web_dark_rd_SI@1x.png'
import backgroundImage from '../assets/photo-1486406146926-c627a92ad1ab.avif'

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
    <div className="flex flex-row relative">
      <div className="absolute top-0 left-0">
        <NavBar/>
      </div>
      <div className="flex-1 relative">
        <img src={backgroundImage} className="w-full h-full object-cover" alt="Background" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <section className="bg-black1 w-1/3 h-screen" style={{ height: '125vh' }}>
        
        <div className="text-white">invest</div>
      </section>
    </div>
  );
};



export default Home