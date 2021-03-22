import React, { useState } from "react"
import { Link } from "react-router-dom"

import testRooms from '../../testData/testRooms'

import RoomContainer from "../chat_parts/RoomContainer"
import Profile from "../chat_parts/Profile"

const RoomPage = (props) => {
    const username = props.username || "Tester"
    const [rooms, ] = useState(testRooms)

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