import React from 'react'

/* 
    Message text input. 
    Undecided whether pressing enter should submit or newline.
*/

const MessageTextBox = (props) => {
    return (
        <div >
            <textarea className="input is-info"
                value={props.value}
                onChange={props.handleChange}
                placeholder="Comment"
            />
        </div>
    )
}

export default MessageTextBox