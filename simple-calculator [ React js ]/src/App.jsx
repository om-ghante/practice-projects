import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Intro from './component/Intro'
import DefaultApp from './component/Default-App'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Intro />} />
          <Route path='/defualt-app' element={<DefaultApp />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
