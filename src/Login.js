import React from 'react';
import './Login.css';
import {Button} from '@material-ui/core';
import {auth, provider} from './firebase';
function Login() {
    const signIn=()=>{
        auth.signInWithPopup(provider).catch((error)=>alert(error.message));
    }
  return (
    <div className='login'>

        <div className="login_logo">
            <img src="https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/60415153fea4767867265233_Microinfluencers%201140%20wide-64.png" alt="Discord Logo" />
        </div>
        <Button onClick={signIn}>Sign in</Button>
    </div>
  )
}

export default Login