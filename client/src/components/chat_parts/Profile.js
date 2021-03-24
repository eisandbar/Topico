import React from 'react'
import Avatar from './Avatar'

/* 
    Profile for chat and room pages
*/

const Profile = (props) => {
    return (
        <div className="profile">
            <Avatar/>
            <div className="profile-username">{props.username}</div>
        </div>
    )
}

export default Profile