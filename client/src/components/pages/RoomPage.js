import React from "react"



import RoomContainer from "../chat_parts/RoomContainer"
import Profile from "../chat_parts/Profile"
import { useRooms } from "../hooks/useRooms"
import { useAuth } from "../auth/ProvideAuth"
import { useUser } from "../user/ProvideUser"
import NavBar from "../chat_parts/NavBar"

import '../../sass/roomPage.scss'

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
        <div className="fullheight">
            <NavBar />

            <div className="columns fullheight is-gapless is-mobile">

                <div className="column left-column">
                    <div className="rows fullheight">

                        <div className="row profile flex-column">
                            <Profile username={user.username} />
                            <button className="button is-rounded is-outlined is-warning has-background-white" onClick={auth.signout} > Logout </button>
                        </div>

                        <div className="row side-bar">
                        </div>

                    </div>
                </div>

                <div className="column is-9 main-content">

                    <RoomContainer rooms={rooms} />

                </div>

            </div>
        </div>
    )
}

export default RoomPage