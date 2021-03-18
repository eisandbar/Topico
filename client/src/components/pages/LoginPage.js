import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import useFormInput from '../hooks/useFormInput'

const LoginForm = () => {
    const email = useFormInput
    const password = useFormInput

    const handleSubmit = () => {
        return
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-input">
                <label for="email">Email</label>
                <input type="email" {...email} placeholder="Enter Email" />
            </div>
            <div className="form-input">
                <label for="password">Password</label>
                <input type="password" {...password} placeholder="Enter Password" />
            </div>
            <button type="submit" class="btn btn-primary btn-block">Login</button>
        </form>
    )
}

const RegisterLink = () => {
    return (
        <Link to="/register">Register</Link>
    )
}

const LoginPage = () => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm/>
            <RegisterLink/>
        </div>
    )
}

export default LoginPage