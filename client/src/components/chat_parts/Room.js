import React from 'react'
import { Link } from 'react-router-dom'

const Room = (props) => {
    return (
        <Link to={`chat?cr=${props.room.id}`} >
        <li className="room">
            <div className="room-icon">

            </div>
            <div className="room-name">
                {props.room.name}
            </div>
        </li>
        </Link>
    )
}

export default Room