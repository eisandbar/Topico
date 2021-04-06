import React, { useState } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

import MessageContainer from '../chat_parts/MessageContainer'
import MessageTextBoxContainer from '../chat_parts/MessageTextBoxContainer'
import Profile from '../chat_parts/Profile'
import { useSocket } from '../hooks/useSocket'
import { useAuth } from '../auth/ProvideAuth'
import { useUser } from '../user/ProvideUser'
import NavBar from '../chat_parts/NavBar'

import '../../sass/chatPage.scss'
import '../../sass/roomPage.scss'
/* 
    The ChatPage component.

    Each room has its own chatroom(cr) query param. For now anyone can access any room.
    useSocket hook connects to the server via websocket.
    Messages are displayed in the MessageContainer.
    Messages are sent via the MessageTextBoxContainer with the sendMessage function
*/

const ChatPage = (props) => {
    const auth = useAuth()
    const { user } = useUser()
    let query = new URLSearchParams(useLocation().search) // Find what room component is in
    const [messages, sendMessage] = useSocket({ username: user.username, roomId: query.get("cr") }) // Connect to the room
    const location = useLocation()
    const [display, setDisplay] = useState("is-hidden-mobile")
    const handleClick = () => {
        display === "is-hidden-mobile" ? setDisplay("") : setDisplay("is-hidden-mobile")
    }

    return (
        <div className="fullheight">
            <NavBar handleClick={handleClick}/>

            <div className="columns fullheight is-gapless is-mobile">
                <div className={"column left-column " + display}>
                    <div className="rows fullheight">
                        
                        <div className="row profile flex-column">
                            <Profile username={user.username} />
                            <button className="button is-fullwidth is-rounded is-outlined is-warning has-background-white" onClick={auth.signout} > Logout </button>
                            
                        </div>

                        <div className="row side-bar">
                            <div className="block roomname">
                                <p className="is-size-3 has-text-weight-semibold is-size-6-mobile">{location.state.roomname}</p>
                            </div>
                            <Link to="/rooms" className="button is-fullwidth is-rounded is-outlined is-danger has-background-white"> Back </Link>
                        </div>

                    </div>
                </div>

                <div className="column main-content">
                    <div className="rows fullheight">
                        <div className="row chat-messages" id="scroll-style">

                            <MessageContainer messages={messages} />

                        </div>

                        <div className="row chat-input">

                            <MessageTextBoxContainer sendMessage={sendMessage} />

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ChatPage