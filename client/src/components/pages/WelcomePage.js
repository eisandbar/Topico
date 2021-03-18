import React from 'react'
import {Link} from 'react-router-dom'

const WelcomePage = () => {
    return (
        <div className="welcom-page">
            <div className="Title">
                Welcome to Topico!
            </div>
            <Link to="/login"> Continue </Link>
        </div>
    )
}

export default WelcomePage