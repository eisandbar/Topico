import React, { useState } from 'react'

import MessageSendButton from './MessageSendButton'
import MessageTextBox from './MessageTextBox'

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
        <div>
            <MessageTextBox value={textInput} handleChange={handleChange} />
            <MessageSendButton handleSubmit={handleSubmit} />
        </div>
    )
}

export default MessageTextBoxContainer