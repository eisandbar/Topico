import React from 'react'
import Room from './Room'

const RoomContainer = (props) => {
    return (
        <div className="room-container">
            <ul>
                {props.rooms.map((room) => <Room key={room.id} room={room}/>)}
            </ul>
        </div>
    )
}

export default RoomContainer