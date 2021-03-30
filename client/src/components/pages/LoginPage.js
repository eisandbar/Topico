import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../login_parts/LoginForm'
import ErrorBox from '../register_parts/ErrorBox'

import '../../sass/loginPage.scss'

/* 
    Login page component.
    Most of the work is done in the LoginForm component.
*/

const LoginPage = () => {
    const [errors, setErrors] = useState([])

    return (
        <div className="fullheight">

            <div className="top-row is-flex is-align-items-flex-end" >
                <div className="container">
                    <p className="has-text-white is-size-1 "> Login </p>
                </div>
            </div>

            <div className="middle-row">
                <div className="container">
                    <LoginForm setErrors={setErrors} />
                    <Link to="/register">
                        <p className="is-size-5 has-text-weight-medium"> New here? Register </p>
                    </Link>
                </div>
            </div>

            <div className="bottom-row">
                <ErrorBox errors={errors} />
            </div>

        </div>
    )
}

export default LoginPage