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
            const newMessage = {
                text: message.msg,
                time: undefined,
                id: messages.length + 1
            }
            setMessages(messages => [...messages, newMessage])
        })

        return () => socketRef.current.disconnect()
    }, [username, room])

    const sendMessage = (message) => {
        socketRef.current.emit("chat message", message)
    }

    return (
        [messages, sendMessage]
    )
}
