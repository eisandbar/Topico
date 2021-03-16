import React from 'react'
import Avatar from './Avatar'

const Message = (props) => {
    return (
        <li key={props.message.id} className='message'>
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