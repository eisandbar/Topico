import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// Styling
import './index.css'

// Page Components
import RegisterPage from './components/pages/RegisterPage'
import LoginPage from './components/pages/LoginPage'
import ChatPage from './components/pages/ChatPage'
import WelcomePage from './components/pages/WelcomePage';
import RoomPage from './components/pages/RoomPage';

// Authorization components
import { PrivateRoute } from './components/auth/PrivateRoute';
import { ProvideAuth } from './components/auth/ProvideAuth';

const Routing = ()  => {
    return (
        <ProvideAuth>
            <Router>
                <Switch>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                    <Route path="/register">
                        <RegisterPage />
                    </Route>
                    <PrivateRoute path="/chat">
                        <ChatPage />
                    </PrivateRoute>
                    <PrivateRoute path="/rooms">
                        <RoomPage />
                    </PrivateRoute>
                    <Route path="/" exact component={WelcomePage} />
                </Switch>
            </Router>
        </ProvideAuth>
    )
}


// ==============================

ReactDOM.render(
    <Routing />,
    document.getElementById('root')
)