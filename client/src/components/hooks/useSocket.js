import { useEffect, useRef, useState } from 'react'
import {io} from 'socket.io-client'

import testMessages from '../../testData/testMessages'

/* 
    useSocket is a custom hook that manages the websocket when connecting to chat.
    It returns a list of messages a sendMessage function

    On mounting/ updating of the ChatPage it connects to the server with a websocket.
    On dismounting it terminates the connection.
*/

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
                time: message.time,
                id: message.id
            }
            setMessages(messages => [...messages, newMessage])
        })

        return () => socketRef.current.disconnect() // Disconnects on dismount
    }, [username, room])

    const sendMessage = (message) => { // Emits to server the new message
        socketRef.current.emit("chat message", message)
    }

    return (
        [messages, sendMessage]
    )
}
