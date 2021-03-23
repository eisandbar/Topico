import React from 'react'
import { useHistory} from 'react-router-dom'

import { sendPost } from '../../utils/sendPost'
import useFormInput from '../hooks/useFormInput'

const LoginForm = () => {
    const email = useFormInput()
    const password = useFormInput()
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formInput = {
            data: {
                email: email,
                password: password,
            },
            url: "/login",
        }
        const res = await sendPost(formInput)
        console.log(res)
        if (res.success) {
            history.push(res.redirectUrl)
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