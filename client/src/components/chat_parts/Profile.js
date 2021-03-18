import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from './Avatar'

const Profile = (props) => {
    return (
        <div className="profile">
            <Avatar/>
            <div className="profile-username">{props.username}</div>
            <Link to="/login">Logout</Link>
        </div>
    )
}

export default Profile