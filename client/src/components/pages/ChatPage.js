import React, {Component} from 'react'

import testMessages from '../../testData/testMessages'
import testRooms from '../../testData/testRooms'

import MessageContainer from '../chat_parts/MessageContainer'
import MessageTextBox from '../chat_parts/MessageTextBox'
import Profile from '../chat_parts/Profile'
import RoomContainer from '../chat_parts/RoomContainer'
import MessageSendButton from '../chat_parts/MessageSendButton'


const ChatPage = () => {
    return (
        <div className="full-height">
            <div className="room-column">
                <Profile username={'User'}/>
                <RoomContainer rooms={testRooms}/>
            </div>
            <div className="chat-column">
                <MessageContainer messages={testMessages}/>
                <MessageTextBox />
                <MessageSendButton />
            </div>
        </div>

    )
}

export default ChatPage