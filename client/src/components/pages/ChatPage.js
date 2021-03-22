import React, {Component, useState} from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

import MessageContainer from '../chat_parts/MessageContainer'
import MessageTextBoxContainer from '../chat_parts/MessageTextBoxContainer'
import Profile from '../chat_parts/Profile'
import { useSocket } from '../hooks/useSocket'

const useQuery = () => {
    return new URLSearchParams(useLocation().search)
}

const ChatPage = (props) => {
    const [messages, sendMessage] = useSocket({username:"Tester", room:"React-test"})
    let query = useQuery()
    console.log(query.get("cr"))

    return (
        <div className="full-height">
            <div className="nav-column">
                <Profile username={'User'}/>
                <Link to="/rooms"> Back </Link>
                <br></br>
                <Link to="/login">Logout</Link>
            </div>
            <div className="content-column">
                <MessageContainer messages={messages}/>
                <MessageTextBoxContainer sendMessage={sendMessage} />
            </div>
        </div>

    )
}

export default ChatPage