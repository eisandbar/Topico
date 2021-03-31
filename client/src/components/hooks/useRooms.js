import { useEffect, useState } from 'react'
import { sendGet } from '../../utils/sendGet'
import { sendPost } from '../../utils/sendPost'

/* 
    useRooms is a custom hook that returns a rooms array and a createRoom function.
    On mounting and updating it GETs a list of rooms from the server.
    createRoom POSTs to the server a new roomname and receives a room object.
*/

export const useRooms = () => {
    const [rooms, setRooms] = useState([]) // Declare with emtpy Array<room>

    useEffect (() => { // Runs when RoomPage component mounts/updates
        const getRooms = async () => {
            const res = await sendGet({url: "/getRooms"})
            const newRooms = res.rooms.map(room => { // Formats the res data into room objects
                return {
                    id: room.roomId,
                    roomname: room.roomname,
                    icon: room.icon
                }
            })
            setRooms(newRooms) // Adds to list of rooms
        }
        getRooms()
    }, [])


    // Function POSTs roomname to the server and gets a new room object as a result
    const createRoom = async (roomname) => { 
        await sendPost({
            url: "/newRoom",
            data: {roomname}
        }).forEach(room => { // Formats res data into room objects. forEach since only expecting 1 element
            const newRoom = {
                id: room.id,
                name: room.name,
                icon: room.icon
            }
            setRooms(rooms => [...rooms, newRoom])
        })
    }

    return [rooms, createRoom]
}