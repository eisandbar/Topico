import React, { useEffect, useRef, useState } from 'react'
import {io} from 'socket.io-client'
import testMessages from '../../testData/testMessages'

export const useSocket = ({username, room}) => {
    const [messages, setMessages] = useState(testMessages)
    const socketRef = useRef()

    useEffect(() => {
        // Creates new websocket
        socketRef.current = io()

        // Sends data to join the room
        socketRef.current.emit("join room", {username, room})

        // On incoming messages
        socketRef.current.on("chat message", message => {
            setMessages([...messages, message])
        })

        return () => socketRef.current.disconnect()
    })

    const sendMessage = (message) => {
        socketRef.current.emit("chat message", message)
        setMessages([...messages, message])
    }

    return (
        [messages, sendMessage]
    )
}
