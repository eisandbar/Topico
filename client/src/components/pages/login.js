import React from 'react'

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

class RegisterLink extends React.Component {
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
                <RegisterLink/>
            </div>
        )
    }
}

export default LoginPage