import React from 'react'

/* 
    Send button for the MessageTextBox.
*/

const MessageSendButton = (props) => {

    return (
        <div 
            className="message-send-btn"
            onClick={props.handleSubmit}
        >
            <div className="send-btn-text">
                Send
            </div>

        </div>
    )
}

export default MessageSendButton