import React from "react"

import RoomContainer from "../chat_parts/RoomContainer"
import Profile from "../chat_parts/Profile"
import { useRooms } from "../hooks/useRooms"
import { useAuth } from "../auth/ProvideAuth"
import { useUser } from "../user/ProvideUser"

/* 
    Room page component.
    Currently the default page after logging in.
    Room components in RoomContainer component are links to the rooms.
*/

const RoomPage = (props) => {
    const [rooms,  ] = useRooms()
    const auth = useAuth()
    const {user} = useUser()
    
    return (
        <div className="full-height">
            <div className="nav-column">
                <Profile username={user.username} />
                <button onClick={auth.signout} > Logout </button>
            </div>
            <div className="content-column">
                <RoomContainer rooms={rooms} />
            </div>
        </div>
    )
}

export default RoomPage