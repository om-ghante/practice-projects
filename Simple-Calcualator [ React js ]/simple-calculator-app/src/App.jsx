import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Intro from './components/Intro'
import DefaultApp from './components/DefaultApp'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Intro />}/>
          <Route path='/default-app' element={<DefaultApp />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
