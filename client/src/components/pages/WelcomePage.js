import React from 'react'
import { Link } from 'react-router-dom'


import '../../sass/welcomePage.scss'

/* 
    Welcome page component.
    Default page. 
    Can later make a custom link to the RoomsPage if already authorized.
*/

const WelcomePage = () => {
    return (
        <div className="fullheight">
            <div className="top-row" />
            <section className="hero is-halfheight is-primary">
                <div className="hero-body">
                    <Link to="/login">
                        <div className="">
                            <p className="title is-1">
                                Welcome to Topico!
                            </p>
                            <p className="subtitle is-4">
                                Continue
                            </p>
                        </div>
                    </Link>
                </div>
            </section>
            <div className="bottom-row" />
        </div>
    )
}

export default WelcomePage