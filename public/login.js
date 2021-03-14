import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'

class Login extends React.Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
                <form>
                    <div>
                        <label for="email"> Email </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                        />
                    </div>
                    <div>
                        <label for="password"> Password </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                        />
                    </div>
                </form>
                
            </div>
        );
    }
}

// ===============================================

ReactDOM.render(
    <Login />,
    document.getElementById('root')
)