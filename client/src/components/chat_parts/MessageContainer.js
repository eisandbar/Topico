import React from 'react'
import Message from './Message'

/* 
    The chat body where all the messages will show.
*/

const MessageContainer = (props) => {
    return (
        <div className="">
            <ul>
                {props.messages.map((message) => <Message key={message.id} message={message}/>)}
            </ul>
        </div>

    )
}

export default MessageContainer