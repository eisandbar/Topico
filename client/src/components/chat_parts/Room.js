import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from './Avatar'

/* 
    Basic Room component.
    Pressing links to a chatroom with room.id
*/

const Room = (props) => {
    return (
        <Link
        to={{
            pathname:"/chat",
            search: `?cr=${props.room.id}`,
            state: {roomname: props.room.roomname}
        }} >
            <li>
                <div className="columns is-variable is-2 is-mobile is-vcentered">

                    <div className="column is-narrow">
                        <Avatar class={"is-64x64"} />
                    </div>

                    <div className="column">
                            <span className="button is-fullwidth is-rounded room-description is-size-3 has-text-weight-semibold"> {props.room.roomname} </span>
                    </div>

                </div>
            </li>
        </Link>

        /* <Link
        to={{
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
        </Link> */
    )
}

export default Room