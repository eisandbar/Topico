import React, { useState } from 'react'

import MessageSendButton from './MessageSendButton'
import MessageTextBox from './MessageTextBox'

const MessageTextBoxContainer = () => {
    const [textInput, setTextInput] = useState("")

    const handleChange = (e) => {
        setTextInput(e.target.value)

    }

    const handlleSubmit = (e) => {

    }

    return (
        <div>
            <MessageTextBox />
            <MessageSendButton />
        </div>
    )
}

export default MessageTextBoxContainer