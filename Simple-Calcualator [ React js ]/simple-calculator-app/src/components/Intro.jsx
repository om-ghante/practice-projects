import React from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import { useNavigate } from 'react-router-dom'

const Intro = () => {
    const navigate = useNavigate();
    const moveToDefaultApp = () => {
        navigate('/default-app');
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
            <button onClick={moveToDefaultApp} className='getstartedbtn'>
                Get Started
            </button>
        </div>
        <p>
            &copy; Copyrights Not Reserved | Made with &hearts; By Om Ghante.
        </p>
    </>
  )
}

export default Intro
