import fetch from 'node-fetch';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import useFormInput from '../hooks/useFormInput'

const RegisterForm = () => {
    const name = useFormInput("as")
    const email = useFormInput("asas@a")
    const password = useFormInput("12345678")
    const password2 = useFormInput("12345678")
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formInput = {
            name: name.value,
            email: email.value,
            password: password.value,
            password2: password2.value,
        }

        const res = await sendPost(formInput)
        console.log(res)
        if (res.success) {
            history.push(res.redirectUrl)
            console.log("HEre")
            console.log(history.location)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-input">
                <label> 
                    Name
                    <input type="name" {...name} placeholder="Enter Name" />
                </label>
            </div>
            <div className="form-input">
                <label>
                    Email
                    <input type="email" {...email} placeholder="Enter Email" />
                </label>
            </div>
            <div className="form-input">
                <label>
                    Password
                    <input type="password" {...password} placeholder="Enter Password" />
                </label>
            </div>
            <div className="form-input">
                <label>
                    Confirm Password
                    <input type="password" {...password2} placeholder="Confirm Password" />
                </label>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
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

const sendPost = async (formInput) => new Promise((resolve, reject) => {
    console.log(formInput)
    fetch("http://localhost:3000/register", {
        method: "POST",
        body: JSON.stringify(formInput),
        headers: {"Content-Type": "application/json"},
    })
    .then(res => res.json())
    .then(resJson => {
        const {
            errors,
            name,
            email,
            password,
            password2
        } = JSON.parse(resJson)
    console.log(JSON.parse(resJson))
    if(errors) console.log(...errors)
    console.log(name, email, password, password2)
    return resolve(JSON.parse(resJson))
    })
})
export default RegisterPage