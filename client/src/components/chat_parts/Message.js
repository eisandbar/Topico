import React from 'react'
import Avatar from './Avatar'

/* 
    Basic message component
*/

const Message = (props) => {
    return (
        <li className='message'>
            <Avatar/>
            <div className="text-wrapper">
                <div className="text">
                    {`${props.message.username}: ${props.message.messageText}`}
                </div>
            </div>
        </li>
    )
}
export default Message