import React from 'react'
import reactLogo from '../assets/react.svg'
import { useNavigate } from 'react-router-dom'
import viteLogo from '/vite.svg'

const Intro = () => {
    const navigate = useNavigate();
    const moveToCalculator = () => {
        navigate("/defualt-app");
    }
  
  return (
    <>
        <div>
            <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </div>
        <h1>Simple Calculator</h1>
        <div className="card">
            <button onClick={moveToCalculator} className='getstartedbtn'>
                Get Started
            </button>
        </div>
        <p>Made with &hearts; By Om Ghante</p>
        <p>&copy; Rights not reserved.</p>
    </>
  )
}

export default Intro
