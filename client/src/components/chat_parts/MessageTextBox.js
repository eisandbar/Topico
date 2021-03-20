import React from 'react'

const MessageTextBox = (props) => {
    return (
        <div className="message-text-box">
            <textarea
                value={props.value}
                type="text-area"
                placeholder="Comment"
                onChange={props.handleChange}
                onKeyPress={props.handleKey}
            />
        </div>
    )
}

export default MessageTextBox