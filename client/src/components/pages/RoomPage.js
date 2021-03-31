import React from "react"



import RoomContainer from "../chat_parts/RoomContainer"
import Profile from "../chat_parts/Profile"
import { useRooms } from "../hooks/useRooms"
import { useAuth } from "../auth/ProvideAuth"
import { useUser } from "../user/ProvideUser"

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
            <div className="columns fullheight is-gapless is-mobile">

                <div className="column is-3 is-narrow-mobile">
                    <div className="rows fullheight">

                        <div className="row profile flex-column">
                            <div className="box" />
                            <Profile username={user.username} />
                            <button onClick={auth.signout} > Logout </button>
                        </div>

                        <div className="row side-bar">
                            <div className="box" />
                        </div>

                    </div>
                </div>

                <div className="column is-9 main-content">

                    <div className="box" />
                    <RoomContainer rooms={rooms} />

                </div>

            </div>
        
            {/* <div className="nav-column">
                <Profile username={user.username} />
                <button onClick={auth.signout} > Logout </button>
            </div>
            <div className="content-column">
                <RoomContainer rooms={rooms} />
            </div> */}
        </div>
    )
}

export default RoomPage