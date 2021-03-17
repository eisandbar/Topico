import React from 'react'

const Room = (props) => {
    return (
        <li key={props.room.id} className="room">
            <div className="room-icon">

            </div>
            <div className="room-name">
                {props.room.name}
            </div>
        </li>
    )
}

export default Room