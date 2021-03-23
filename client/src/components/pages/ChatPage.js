import React from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

import MessageContainer from '../chat_parts/MessageContainer'
import MessageTextBoxContainer from '../chat_parts/MessageTextBoxContainer'
import Profile from '../chat_parts/Profile'
import { useSocket } from '../hooks/useSocket'

const ChatPage = (props) => {
    let query = new URLSearchParams(useLocation().search)
    const username = props.username || "Tester"
    const [messages, sendMessage] = useSocket({username: username, room: query.get("cr")})

    return (
        <div className="full-height">
            <div className="nav-column">
                <Profile username={username}/>
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