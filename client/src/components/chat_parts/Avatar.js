import React from 'react'
import stockUser from '../../testData/user.png'
/* 
    Avatar component for profile pics in profile and messages
*/

const Avatar = (props) => {
    return (
        <div className="avatar">
            <figure className={"image " + props.class}>
                <img className="is-rounded" src={stockUser} alt="" />
            </figure>
        </div>
    )
}

export default Avatar