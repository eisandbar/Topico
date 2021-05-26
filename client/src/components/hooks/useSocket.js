import { useEffect, useRef} from 'react'
import {io} from 'socket.io-client'

import { useMessages } from './useMessages'
import {IP} from '../../utils/IP'

/* 
    useSocket is a custom hook that manages the websocket when connecting to chat.
    It returns a list of messages a sendMessage function

    On mounting/ updating of the ChatPage it connects to the server with a websocket.
    On dismounting it terminates the connection.
*/

export const useSocket = ({username, roomId}) => {
    const [messages, setMessages] = useMessages(roomId)
    const socketRef = useRef()

    useEffect(() => {
        // Creates new websocket
        socketRef.current = io(IP)

        // Sends data to join the room
        socketRef.current.emit("join room", {username, roomId})

        // On incoming messages
        socketRef.current.on("chat message", message => {
            setMessages(messages => [...messages, message])
        })

        return () => socketRef.current.disconnect() // Disconnects on dismount
    }, [username, roomId, setMessages])

    const sendMessage = (message) => { // Emits to server the new message
        socketRef.current.emit("chat message", message)
    }

    return (
        [messages, sendMessage]
    )
}
