import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class LoginForm extends React.Component {
    render() {
        return (
            <form>
                <div>
                    <label for="email">Email</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter Email"
                    />
                </div>
                <div>
                    <label for="password">Password</label>
                    <input
                        name="password"
                        type="password"
                        placeholder="Enter Password"
                    />
                </div>
                <button type="submit" class="btn btn-primary btn-block">Login</button>
            </form>
        )
    }
}

class Register extends React.Component {
    render() {
        return (
            <a href="/users/register">Register</a>
        )
    }
}

class LoginPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
                <LoginForm/>
                <Register/>
            </div>
        )
    }
}

// ==============================

ReactDOM.render(
    <LoginPage />,
    document.getElementById('root')
)