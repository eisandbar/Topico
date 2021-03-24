import React from 'react'
import { useHistory} from 'react-router-dom'

import { sendPost } from '../../utils/sendPost'
import useFormInput from '../hooks/useFormInput'

/* 
    Login form component.

    On submit POSTs the form inputs to the server.
    The authentication status should be changed here on success.
    Not sure whether server-side or client-side redirects are better.
*/

const LoginForm = () => {
    const email = useFormInput()
    const password = useFormInput()
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault() // Otherwise the history.push doesn't redirect
        const formInput = { // Data needed for the POST
            data: {
                email: email,
                password: password,
            },
            url: "/login",
        }
        const res = await sendPost(formInput) // POSTs the data
        console.log(res)
        if (res.success) { // If login was successful
            history.push(res.redirectUrl) // Redirect to destination.
        }
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

export default LoginForm