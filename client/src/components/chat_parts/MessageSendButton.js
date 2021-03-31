import React from 'react'

/* 
    Send button for the MessageTextBox.
*/

const MessageSendButton = (props) => {

    return (
        <div className="button ml-2 is-info" 
            onClick={props.handleSubmit}
        >
            Send
        </div>
    )
}

export default MessageSendButton