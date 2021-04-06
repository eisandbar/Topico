import React from 'react'
import Avatar from './Avatar'

/* 
    Profile for chat and room pages
*/

const Profile = (props) => {
    return (
        <div className="">
            <Avatar class={""} />
            <div className="profile-username has-text-weight-semibold has-text-white">{props.username}</div>
        </div>
    )
}

export default Profile