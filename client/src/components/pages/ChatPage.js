import React from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

import MessageContainer from '../chat_parts/MessageContainer'
import MessageTextBoxContainer from '../chat_parts/MessageTextBoxContainer'
import Profile from '../chat_parts/Profile'
import { useSocket } from '../hooks/useSocket'
import { useAuth } from '../auth/ProvideAuth'
import { useUser } from '../user/ProvideUser'

/* 
    The ChatPage component.

    Each room has its own chatroom(cr) query param. For now anyone can access any room.
    useSocket hook connects to the server via websocket.
    Messages are displayed in the MessageContainer.
    Messages are sent via the MessageTextBoxContainer with the sendMessage function
*/

const ChatPage = (props) => {
    const auth = useAuth()
    const {user} = useUser()
    let query = new URLSearchParams(useLocation().search) // Find what room component is in
    const [messages, sendMessage] = useSocket({username: user.username, roomId: query.get("cr")}) // Connect to the room

    return (
        <div className="full-height">
            <div className="nav-column">
                <Profile username={user.username}/>
                <Link to="/rooms"> Back </Link>
                <button onClick={auth.signout} > Logout </button>
            </div>
            <div className="content-column">
                <MessageContainer messages={messages}/>
                <MessageTextBoxContainer sendMessage={sendMessage} />
            </div>
        </div>

    )
}

export default ChatPage