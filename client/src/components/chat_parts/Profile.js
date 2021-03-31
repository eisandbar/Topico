import React from 'react'
import Avatar from './Avatar'

/* 
    Profile for chat and room pages
*/

const Profile = (props) => {
    return (
        <div className="">
            <Avatar class={"is-96x96"} />
            <div className="">{props.username}</div>
        </div>
    )
}

export default Profile