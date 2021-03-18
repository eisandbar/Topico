import React from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
    return (
        <form>
            <div className="name-form">
                <label for="name">Name</label>
                <input
                    name="name"
                    type="name"
                    placeholder="Enter Name"
                />
            </div>
            <div className="email-form">
                <label for="email">Email</label>
                <input
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                />
            </div>
            <div className="password-form">
                <label for="password">Password</label>
                <input
                    name="password"
                    type="password"
                    placeholder="Enter password"
                />
            </div>
            <div className="password-form">
                <label  for="password2">Confirm Password</label>
                <input
                    name="password2"
                    type="password"
                    placeholder="Confirm Password"
                />
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