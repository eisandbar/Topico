import { useEffect, useState } from 'react'
import fetch from 'node-fetch'

import testRooms from '../../testData/testRooms'

/* 
    useRooms is a custom hook that returns a rooms array and a createRoom function.
    On mounting and updating it GETs a list of rooms from the server.
    createRoom POSTs to the server a new roomname and receives a room object.
*/

export const useRooms = () => {
    const [rooms, setRooms] = useState(testRooms) // Declare with emtpy Array<room>

    useEffect (() => { // Runs when RoomPage component mounts/updates
        fetch("http://localhost:3000/rooms", {method: 'GET'}) // GETs a list of rooms from server
        .then(res => res.json())
        .then(resJson => {
            const newRooms = JSON.parse(resJson.rooms).map(room => { // Formats the res data into room objects
                return {
                    id: room.id,
                    name: room.name,
                    icon: room.icon
                }
            })
            setRooms(rooms => [...rooms, ...newRooms]) // Adds to list of rooms
        })
    }, [])

    // Function POSTs roomname to the server and gets a new room object as a result
    const createRoom = async (roomname) => { 
        fetch("http://localhost:3000/rooms", {
            method: 'POST',
            body: JSON.stringify({name: "roomname"}),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => res.json())
        .then(resJson => {
            JSON.parse(resJson.rooms).forEach(room => { // Formats res data into room objects. forEach since only expecting 1 element
                const newRoom = {
                    id: room.id,
                    name: room.name,
                    icon: room.icon
                }
                setRooms(rooms => [...rooms, newRoom]) // Adds to list of rooms
            })
        })
    }

    return [rooms, createRoom]
}