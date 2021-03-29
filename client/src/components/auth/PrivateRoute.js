import React, { useEffect } from 'react'
import { Redirect, Route } from 'react-router'
import { useAuth } from './ProvideAuth'

/* 
    PrivateRoute is a custom Route component that will only render its children when logged in. (auth.user)
    Otherwise redirects to a different page (login/ root).
    Only renders the children, so prop.component will not render.
*/

export const PrivateRoute = ({children, ...rest}) => {
    const auth = useAuth() // Uses the auth context provided by the parent ProvideAuth component

    useEffect(() => {
        auth.checkAuth()
    })

    return (
        <Route 
            {...rest} // Gives the other parameters in the prop
            render={({location}) => {
                return auth.loggedIn ? ( // If logged in
                    children // Render the childer
                ) : (
                    <Redirect // Otherwise redirects to pathname
                        to={{
                            pathname: "/",
                            state: {from: location}
                        }}
                    />
                )
            }}
        />
    )
}