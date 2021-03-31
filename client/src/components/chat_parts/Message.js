import React from 'react'
import Avatar from './Avatar'

/* 
    Basic message component
*/

const Message = (props) => {
    const time = new Date(props.message.date).toLocaleTimeString()
    return (
        <li className="message-block">
            <div className="columns is-variable is-2 is-mobile">

                <div className="column is-narrow">
                    <Avatar class={"is-48x48"} />
                </div>

                <div className="column box m-2">
                    <div className="rows">

                        <div className="row">
                            <span className="message-username"> {props.message.username} </span>
                            <span className="has-text-grey"> {time} </span>
                        </div>

                        <div className="row message-text">
                            {props.message.messageText}
                        </div>

                    </div>
                </div>

            </div>
            {/* <Avatar class={"is-48x48"} />
            <div className="text-wrapper">
                <div className="text">
                    {`${props.message.username}: ${props.message.messageText}`}
                </div>
            </div> */}
        </li>
    )
}
export default Message