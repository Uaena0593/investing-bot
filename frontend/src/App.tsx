import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import './index.css'

function App() {

  return (
    <>
      <Routes>
        <Route path = "/" element = { <Home/> } />
      </Routes>
    </>
  )
}

export default App
