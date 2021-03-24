import React from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

import MessageContainer from '../chat_parts/MessageContainer'
import MessageTextBoxContainer from '../chat_parts/MessageTextBoxContainer'
import Profile from '../chat_parts/Profile'
import { useSocket } from '../hooks/useSocket'

/* 
    The ChatPage component.

    Each room has its own chatroom(cr) query param. For now anyone can access any room.
    useSocket hook connects to the server via websocket.
    Messages are displayed in the MessageContainer.
    Messages are sent via the MessageTextBoxContainer with the sendMessage function
*/

const ChatPage = (props) => {
    let query = new URLSearchParams(useLocation().search) // Find what room component is in
    const username = props.username || "Tester" // Username will probably be taken from auth context
    const [messages, sendMessage] = useSocket({username: username, room: query.get("cr")}) // Connect to the room

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