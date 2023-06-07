import React from 'react'
import './Login.css'
import { Button } from '@mui/material'

function Login() {
    const signIn = () => {
      
    }
  return (
    <div className='login'>
        <h2>i am login
            page
        </h2>
        <div className='login__logo'>
              <img src="https://i.pinimg.com/236x/df/10/4a/df104ad88ea7d8e29f2fb2a1867c7afa.jpg"
               alt="" />

        </div>

        <Button onClick={signIn}>Sign in</Button>
      
    </div>
  );
}

export default Login
