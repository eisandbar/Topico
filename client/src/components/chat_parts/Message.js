import React from 'react'
import Avatar from './Avatar'

/* 
    Basic message component
*/

const Message = (props) => {
    const time = new Date(props.message.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    return (
        <li>
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
        </li>
    )
}
export default Message