import React from 'react';
import { Link } from 'react-router-dom';

import useFormInput from '../hooks/useFormInput'

const RegisterForm = () => {
    const name = useFormInput("")
    const email = useFormInput("")
    const password = useFormInput("")
    const password2 = useFormInput("")

    const handleSubmit = () => {
        return
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-input">
                <label for="name">Name</label>
                <input type="name" {...name} placeholder="Enter Name" />
            </div>
            <div className="form-input">
                <label for="email">Email</label>
                <input type="email" {...email} placeholder="Enter Email" />
            </div>
            <div className="form-input">
                <label for="password">Password</label>
                <input type="password" {...password} placeholder="Enter Password" />
            </div>
            <div className="form-input">
                <label  for="password2">Confirm Password</label>
                <input type="password" {...password2} placeholder="Confirm Password" />
            </div>
            <button type="submit" class="btn btn-primary btn-block">
                Register
            </button>
        </form>
    )
}

const LoginLink = () => {
    return (
        <Link to="users/login">Login</Link>
    )
}

const RegisterPage = () => {
    return (
        <div className="register-page">
            <h1>Register</h1>
            <RegisterForm/>
            <p>Have an account? <LoginLink/></p>
        </div>
    )
}

export default RegisterPage