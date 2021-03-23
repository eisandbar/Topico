import React from 'react'
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
                <label>
                    Email
                    <input type="email" {...email} placeholder="Enter Email" />
                </label>
            </div>
            <div className="form-input">
                <label> 
                    Passsword
                    <input type="password" {...password} placeholder="Enter Password" />
                </label>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Login</button>
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