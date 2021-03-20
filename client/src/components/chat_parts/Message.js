import React from 'react'
import Avatar from './Avatar'

const Message = (props) => {
    return (
        <li className='message'>
            <Avatar/>
            <div className="text-wrapper">
                <div className="text">
                    {props.message.text}
                </div>
            </div>
        </li>
    )
}
export default Message