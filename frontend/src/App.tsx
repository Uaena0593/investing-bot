import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import './index.css'
import SignUp from './pages/SignUp'

function App() {

  return (
    <>
      <Routes>
        <Route path = "/" element = { <Home/> } />
        <Route path = "/signup" element  = { <SignUp/> }/>
      </Routes>
    </>
  )
}

export default App
