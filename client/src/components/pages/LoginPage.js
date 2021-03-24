import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../login_parts/LoginForm'

/* 
    Login page component.
    Most of the work is done in the LoginForm component.
*/

const LoginPage = () => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm />
            <Link to="/register">Register</Link>
        </div>
    )
}

export default LoginPage