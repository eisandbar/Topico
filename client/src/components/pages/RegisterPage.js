import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ErrorBox from '../register_parts/ErrorBox';
import RegisterForm from '../register_parts/RegisterForm';

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