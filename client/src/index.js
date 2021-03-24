import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'node-fetch'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './index.css'

import RegisterPage from './components/pages/RegisterPage'
import LoginPage from './components/pages/LoginPage'
import ChatPage from './components/pages/ChatPage'
import WelcomePage from './components/pages/WelcomePage';
import RoomPage from './components/pages/RoomPage';
import { PrivateRoute } from './components/auth/PrivateRoute';
import { ProvideAuth } from './components/auth/ProvideAuth';

fetch("http://localhost:3000/test", {method: 'GET'})
    .then(resJson => {
        
        console.log("Hi")
        return resJson.json()
    })
    .then(res => console.log(res.data))

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