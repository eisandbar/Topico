import React from 'react'
import { useHistory } from 'react-router-dom'

import '../../sass/loginPage.scss'

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
    const email = useFormInput("")
    const password = useFormInput("")
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
        <form onSubmit={handleSubmit} className="box">
            <div className="field">
                <label className="label is-size-3"> Email </label>
                <div className="control">
                    <input type="email" {...email} placeholder="Enter Email" className="input is-size-5 is-rounded is-primary" />
                </div>
            </div>

            <div className="field">
                <label className="label is-size-3"> Passsword </label>
                <div className="control">
                    <input type="password" {...password} placeholder="Enter Password" className="input is-size-5 is-rounded is-primary" />
                </div>
            </div>

            <div className="control py-3">
                <button type="submit" className="button p-3 is-primary"> Login </button>
            </div>
        </form>
    )
}

export default LoginForm