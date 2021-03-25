import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';

function Login() {

    const signIn = () => {

    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/langfr-220px-WhatsApp.svg.png" alt="whatsapp image" />
                <div className="login__text">
                    <h1>Sign in to WhatsApp</h1>
                </div>

                <Button onClick={signIn}>
                    Sign In with Google
                </Button>
            </div>    
        </div>
    );
}

export default Login
