import React from 'react';
import { useHistory } from 'react-router-dom';

import { sendPost } from '../../utils/sendPost';
import useFormInput from '../hooks/useFormInput'

/* 
    Register form component

    On submit POSTs the form inputs to the server
*/

const RegisterForm = (props) => {
    const username = useFormInput("")
    const email = useFormInput("")
    const password = useFormInput("")
    const password2 = useFormInput("")
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
        props.setErrors([])
        const res = await sendPost(formInput) // POSTing to server
        props.setErrors([...res.errors].map(error => error.msg)) // sends to parent all the errors
        if (res.success) { // If registering was successful
            history.push(res.redirectUrl) // Redirects to /login
        }
    }

    return (
        <form onSubmit={handleSubmit} className="box">

            <div className="field">
                <label className="label is-size-3"> Name </label>
                <div className="control">
                <input type="name" {...username} placeholder="Enter Name" className="input is-size-5 is-rounded is-primary"/>
                </div>
            </div>

            <div className="field">
                <label className="label is-size-3"> Email </label>
                <div className="control">
                <input type="email" {...email} placeholder="Enter Email" className="input is-size-5 is-rounded is-primary" />
                </div>
            </div>

            <div className="field">
                <label className="label is-size-3"> Password </label>
                <div className="control">
                <input type="password" {...password} placeholder="Enter Password" className="input is-size-5 is-rounded is-primary" />
                </div>
            </div>

            <div className="form-input">
                <label className="label is-size-3"> Confirm Password </label>
                <div className="control">
                <input type="password" {...password2} placeholder="Confirm Password" className="input is-size-5 is-rounded is-primary" />
                </div>
            </div>

            <div className="control py-3">
                <button type="submit" className="button p-3 is-primary"> Register </button>
            </div>

        </form>
    )
}

export default RegisterForm