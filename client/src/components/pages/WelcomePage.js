import React from 'react'
import {Link} from 'react-router-dom'

/* 
    Welcome page component.
    Default page. 
    Can later make a custom link to the RoomsPage if already authorized.
*/

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