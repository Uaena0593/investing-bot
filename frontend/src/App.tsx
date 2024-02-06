import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import './index.css'
import CreateAccount from './pages/CreateAccount'


function App() {

  return (
    <>
      <Routes>
        <Route path = "/" element = { <Home/> } />
        <Route path = "/createaccount" element  = { <CreateAccount/> }/>
      </Routes>
    </>
  )
}

export default App
