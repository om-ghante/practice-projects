import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [ userName, setUserName ] = useState('');
  const [ userPassword, setUserPassword ] = useState('');

  const navigate = useNavigate();

  const user = "admin";
  const pass = "Pass@123";

  const HandleSubmit = () => {

    if( (userName == user) && (userPassword == pass) ) {
      navigate('/default_app');
    } else {
      alert("Username & Password Dosen't Match...!!");
    }
  }

  return (
    <>
        <div className='auth-main-div'>
            <h1>To-Do App</h1>

            <h3>Hello,Again!</h3>

            <div className='auth-div'>

              <input 
                type="text" 
                name="userName"
                value={userName}
                placeholder="Username" 
                onChange={(e) => setUserName(e.target.value)}
              />

              <input 
                type="Password" 
                name="userPassword"
                value={userPassword}
                placeholder='Password'
                onChange={(e) => setUserPassword(e.target.value)}
              />
              
              <button onClick={HandleSubmit} onKeyDown={HandleSubmit}>
                Login
              </button>
            </div>

            <p>Note : <br /> Username : {user} <br /> Password : {pass} </p>
        </div>
    </>
  )
}

export default Auth
