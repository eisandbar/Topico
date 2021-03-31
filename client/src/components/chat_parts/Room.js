import React from 'react'
import { Link } from 'react-router-dom'

/* 
    Basic Room component.
    Pressing links to a chatroom with room.id
*/

const Room = (props) => {
    return (
        <Link to={{
            pathname:"/chat",
            search: `?cr=${props.room.id}`,
            state: {roomname: props.room.roomname}
        }} >
        <li className="room">
            <div className="room-icon">

            </div>
            <div className="room-name">
                {props.room.roomname}
            </div>
        </li>
        </Link>
    )
}

export default Room