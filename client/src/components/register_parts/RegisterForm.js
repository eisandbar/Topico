import React from 'react';
import { useHistory } from 'react-router-dom';

import { sendPost } from '../../utils/sendPost';
import useFormInput from '../hooks/useFormInput'

const RegisterForm = (props) => {
    const name = useFormInput("as")
    const email = useFormInput("asas@a")
    const password = useFormInput("12345678")
    const password2 = useFormInput("12345678")
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formInput = {
            data: {
                name: name.value,
                email: email.value,
                password: password.value,
                password2: password2.value,
            },
            url: "/register",
        }

        const res = await sendPost(formInput)
        console.log(res)
        props.setErrors([...res.errors].map(error => error.msg))
        if (res.success) {
            history.push(res.redirectUrl)
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

export default RegisterForm