import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './index.css'

import RegisterPage from './components/pages/RegisterPage'
import LoginPage from './components/pages/LoginPage'
import ChatPage from './components/pages/ChatPage'
import WelcomePage from './components/pages/WelcomePage';
import RoomPage from './components/pages/RoomPage';

const Routing = ()  => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={LoginPage}/>
                <Route path="/register" component={RegisterPage} />
                <Route path="/chat" component={ChatPage} />
                <Route path="/rooms" component={RoomPage} />
                <Route path="/" exact component={WelcomePage} />
            </Switch>
        </Router>
    )
}


// ==============================

ReactDOM.render(
    <Routing />,
    document.getElementById('root')
)