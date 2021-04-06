import React, { useState } from "react"



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
    const [display, setDisplay] = useState("is-hidden-mobile")
    const handleClick = () => {
        display === "is-hidden-mobile" ? setDisplay("") : setDisplay("is-hidden-mobile")
    }
    
    return (
        <div className="fullheight">
            <NavBar handleClick={handleClick} />

            <div className="columns fullheight is-gapless is-mobile">

                <div className={"column left-column " + display}>
                    <div className="rows fullheight">

                        <div className="row profile flex-column">
                            <Profile username={user.username} />
                            <button className="button is-rounded is-outlined is-warning has-background-white" onClick={auth.signout} > Logout </button>
                        </div>

                        <div className="row side-bar">
                        </div>

                    </div>
                </div>

                <div className="column main-content rooms">
                    <div className="rooms" id="scrollbar">
                        <RoomContainer rooms={rooms} />
                    </div>
                </div>

                <div className="column has-background-primary-light is-hidden-mobile is-3">
                </div>

            </div>
        </div>
    )
}

export default RoomPage