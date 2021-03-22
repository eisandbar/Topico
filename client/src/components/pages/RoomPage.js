import React, { useEffect } from "react"
import { Link } from "react-router-dom"

import RoomContainer from "../chat_parts/RoomContainer"
import Profile from "../chat_parts/Profile"
import { useRooms } from "../hooks/useRooms"

const RoomPage = (props) => {
    const username = props.username || "Tester"
    const [rooms, createRoom] = useRooms()
    
    useEffect(() => {
        createRoom("Room 5").then(console.log("posted"))
    }, []) 

    return (
        <div className="full-height">
            <div className="nav-column">
                <Profile username={username} />
                <Link to="/login"> Logout </Link>
            </div>
            <div className="content-column">
                <RoomContainer rooms={rooms} />
            </div>
        </div>
    )
}

export default RoomPage