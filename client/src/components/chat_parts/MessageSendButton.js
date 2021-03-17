import React from 'react'

const MessageSendButton = (props) => {
    return (
        <div 
            className="message-send-btn"
            onClick={props.handleClick}
        >
            <div className="send-btn-text">
                Send
            </div>

        </div>
    )
}

export default MessageSendButton