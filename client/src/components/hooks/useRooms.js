import { useEffect, useState } from 'react'
import fetch from 'node-fetch'


import testRooms from '../../testData/testRooms'

export const useRooms = () => {
    const [rooms, setRooms] = useState(testRooms)

    useEffect (() => {
        fetch("http://localhost:3000/rooms", {method: 'GET'})
        .then(res => res.json())
        .then(resJson => {
            JSON.parse(resJson.rooms).forEach(room => {
                const newRoom = {
                    id: room.id,
                    name: room.name,
                    icon: room.icon
                }
                setRooms(rooms => [...rooms, newRoom])
            })
        })
    }, [])

    const createRoom = async (roomname) => {
        fetch("http://localhost:3000/rooms", {
            method: 'POST',
            body: JSON.stringify({name: "roomname"}),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => res.json())
        .then(resJson => {
            JSON.parse(resJson.rooms).forEach(room => {
                const newRoom = {
                    id: room.id,
                    name: room.name,
                    icon: room.icon
                }
                setRooms(rooms => [...rooms, newRoom])
            })
        })
    }

    return [rooms, createRoom]
}