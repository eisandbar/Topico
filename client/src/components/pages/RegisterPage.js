import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ErrorBox from '../register_parts/ErrorBox';
import RegisterForm from '../register_parts/RegisterForm';

import '../../sass/registerPage.scss'

/* 
    Register page component.
    Most of the work is done in the RegisterForm component.
    RegisterForm sets the errors, which are displayed in the ErrorBox.
*/

const RegisterPage = () => {
    const [errors, setErrors] = useState([])

    return (
        <div className="fullheight flex-column">
            <div className="top-row is-flex is-align-items-flex-end has-text-weight-semibold">
                <div className="container">
                    <p className="has-text-white is-size-1 "> Register </p>
                </div>
            </div>

            <div className="middle-row">
                <div class="column is-one-quarter is-mobile"></div>
                <div className="container">
                    <RegisterForm setErrors={setErrors} />
                    <Link to="/login">
                        <p className="is-size-5 has-text-weight-medium ">Have an account? Login</p>
                    </Link>

                </div>
            </div>

            <div className="bottom-row">
                {errors.length !== 0 ? (<div className="box container">
                    <ErrorBox errors={errors} />
                </div>) : <div/>}
            </div>

        </div>
    )
}

export default RegisterPage