import React from 'react';

class RegisterForm extends React.Component {
    render() {
        return (
            <form>
                <div className="name-form">
                    <label for="name">Name</label>
                    <input
                        name="name"
                        type="name"
                        placeholder="Enter Name"
                    />
                </div>
                <div className="email-form">
                    <label for="email">Email</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter Email"
                    />
                </div>
                <div className="password-form">
                    <label for="password">Password</label>
                    <input
                        name="password"
                        type="password"
                        placeholder="Enter password"
                    />
                </div>
                <div className="password2-form">
                    <label  for="password2">Confirm Password</label>
                    <input
                        name="passwrod2"
                        type="password"
                        placeholder="Confirm Password"
                    />
                </div>
                <button type="submit" class="btn btn-primary btn-block">
                    Register
                </button>
            </form>
        )
    }
}

class LoginLink extends React.Component {
    render() {
        return (
            <a href="users/login">Login</a>
        )
    }
}

class RegisterPage extends React.Component {
    render() {
        return (
            <div className="register-page">
                <h1>Register</h1>
                <RegisterForm/>
                <p>Have an account? <LoginLink/></p>
            </div>
        )
    }
}

export default RegisterPage