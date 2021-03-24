import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ErrorBox from '../register_parts/ErrorBox';
import RegisterForm from '../register_parts/RegisterForm';

/* 
    Register page component.
    Most of the work is done in the RegisterForm component.
    RegisterForm sets the errors, which are displayed in the ErrorBox.
*/

const RegisterPage = () => {
    const [errors, setErrors] = useState([])

    return (
        <div className="register-page">
            <h1>Register</h1>
            <RegisterForm setErrors={setErrors} />
            <p>Have an account? <Link to="/login">Login</Link></p>
            <ErrorBox errors={errors} />
        </div>
    )
}

export default RegisterPage