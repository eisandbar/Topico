import React from 'react'
import { Link } from 'react-router-dom'

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
                <div className="columns is-variable is-mobile is-vcentered">

                    <div className="column">
                            <span className="button is-fullwidth is-rounded room-description is-size-5 has-text-weight-semibold"> {props.room.roomname} </span>
                    </div>

                </div>
            </li>
        </Link>
    )
}

export default Room