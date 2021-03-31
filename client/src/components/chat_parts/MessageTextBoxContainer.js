import React, { useState } from 'react'

import MessageSendButton from './MessageSendButton'
import MessageTextBox from './MessageTextBox'

/* 
    Container for the message input and send button
*/

const MessageTextBoxContainer = (props) => {
    const [textInput, setTextInput] = useState("")

    const handleChange = (e) => {
        setTextInput(e.target.value)
    }

    const handleSubmit = (e) => {
        props.sendMessage(textInput)
        setTextInput("")
    }

    return (
        <div className="columns is-mobile is-gapless">
            <div className="column is-1" />
            <div className="column">
                <MessageTextBox value={textInput} handleChange={handleChange}/>
            </div>

            <div className="column is-2">
                <MessageSendButton handleSubmit={handleSubmit} />
            </div>
        
        </div>
    )
}

export default MessageTextBoxContainer