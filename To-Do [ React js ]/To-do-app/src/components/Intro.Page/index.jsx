import React from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();

    const HandleClick = () => {
        navigate("/auth");
    }

  return (
    <>
      <div className='intro-main-div'>
        <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <div className='intro-div'>
              <h1 className='Headline'>To-Do App</h1>

              <button onClick={HandleClick}>Get Started</button>

              <div className='text-intro-div'>
                <p>&copy; Om Ghante 2024 | Copyrights Not Reserved</p>
                <p>Made With &hearts; by Om Ghante</p>
                <p>Code for this you can find <a href="https://github.com/om-ghante/Web.dev-Practice-Projects/tree/main/Reacjs-Projects/To-do-app" target='_blank' title="It Will Redirect to Github"> here</a></p>
              </div>
          </div>
      </div>
    </>
  )
}

export default Home
