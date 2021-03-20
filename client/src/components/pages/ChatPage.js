import React, {Component, useState} from 'react'
import { useLocation } from 'react-router'

import testMessages from '../../testData/testMessages'
import testRooms from '../../testData/testRooms'

import MessageContainer from '../chat_parts/MessageContainer'
import MessageTextBoxContainer from '../chat_parts/MessageTextBoxContainer'
import Profile from '../chat_parts/Profile'
import RoomContainer from '../chat_parts/RoomContainer'
import { useSocket } from '../hooks/useSocket'

const useQuery = () => {
    return new URLSearchParams(useLocation().search)
}

const ChatPage = (props) => {
    const [messages, sendMessages] = useSocket({username:"Tester", room:"React-test"})
    const [rooms, setRooms] = useState("")
    let query = useQuery()
    console.log(query.get("cr"))

    return (
        <div className="full-height">
            <div className="room-column">
                <Profile username={'User'}/>
                <RoomContainer rooms={testRooms}/>
            </div>
            <div className="chat-column">
                <MessageContainer messages={messages}/>
                <MessageTextBoxContainer />
            </div>
        </div>

    )
}

export default ChatPage