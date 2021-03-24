import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../login_parts/LoginForm'
import ErrorBox from '../register_parts/ErrorBox'

/* 
    Login page component.
    Most of the work is done in the LoginForm component.
*/

const LoginPage = () => {
    const [errors, setErrors] = useState([])

    return (
        <div>
            <h1>Login</h1>
            <LoginForm setErrors={setErrors} />
            <Link to="/register">Register</Link>
            <ErrorBox errors={errors} />
        </div>
    )
}

export default LoginPage