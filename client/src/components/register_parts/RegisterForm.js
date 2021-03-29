import React from 'react';
import { useHistory } from 'react-router-dom';

import { sendPost } from '../../utils/sendPost';
import useFormInput from '../hooks/useFormInput'

/* 
    Register form component

    On submit POSTs the form inputs to the server
*/

const RegisterForm = (props) => {
    const username = useFormInput("as")
    const email = useFormInput("asas@a")
    const password = useFormInput("12345678")
    const password2 = useFormInput("12345678")
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault() // Otherwise the history.push redirect doesn't work
        const formInput = { // Data to POST
            data: {
                username: username.value,
                email: email.value,
                password: password.value,
                password2: password2.value,
            },
            url: "/register",
        }
        props.setErrors()
        const res = await sendPost(formInput) // POSTing to server
        console.log(res)
        props.setErrors([...res.errors].map(error => error.msg)) // sends to parent all the errors
        if (res.success) { // If registering was successful
            history.push(res.redirectUrl) // Redirects to /login
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-input">
                <label> 
                    Name
                    <input type="name" {...username} placeholder="Enter Name" />
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

export default RegisterForm