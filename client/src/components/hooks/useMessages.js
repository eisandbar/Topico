import { useEffect, useState } from 'react'
import { sendPost } from '../../utils/sendPost'

/* 
    useMessages is a custom hook that returns a messages array
    On mounting and updating it GETs a list of messages from the server.
*/

export const useMessages = (roomId) => {
    const [messages, setMessages] = useState([]) // Declare with emtpy Array<message>

    useEffect (() => { // Runs when ChatPage component mounts/updates
        const getMessages = async () => {        
            const res = await sendPost({url: "/getMessages", data: {roomId}})
            const newMessages = res.messages.map(message => { // Formats the res data into message objects
                return {
                    id: message.id,
                    username: message.username,
                    roomname: message.roomname,
                    messageText: message.messageText,
                    date: message.date
                }
            })
            setMessages(newMessages) // Adds to list of messages
        }
        getMessages()
    }, [roomId])
    return [messages, setMessages]
}