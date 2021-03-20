import React from 'react'
import Message from './Message'

const MessageContainer = (props) => {
    return (
        <div className="message-container">
            <ul>
                {props.messages.map((message) => <Message key={message.id} message={message}/>)}
            </ul>
        </div>

    )
}

export default MessageContainer