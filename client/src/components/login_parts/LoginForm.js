import React from 'react'
import { useHistory} from 'react-router-dom'

import { useAuth } from '../auth/ProvideAuth'
import useFormInput from '../hooks/useFormInput'
import { useUser } from '../user/ProvideUser'

/* 
    Login form component.

    On submit POSTs the form inputs to the server.
    The authentication status should be changed here on success.
    Not sure whether server-side or client-side redirects are better.
*/

const LoginForm = (props) => {
    const email = useFormInput("Tester@mail")
    const password = useFormInput("12345678")
    const history = useHistory()
    const auth = useAuth()
    const user = useUser()

    const handleSubmit = async (e) => {
        e.preventDefault() // Otherwise the history.push doesn't redirect
        const data = { // Data needed for the POST
            email: email.value,
            password: password.value,
        }
        const res = await auth.signin(data)
        if (res.loggedIn) {// If login was successful
            user.setUser(res.user)
            history.push(res.redirectUrl) // Redirect to destination.
        } else props.setErrors(res.errors)
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