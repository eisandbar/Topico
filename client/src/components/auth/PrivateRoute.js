import React from 'react'
import { Redirect, Route } from 'react-router'
import { useAuth } from './auth'

export const PrivateRoute = ({children, ...rest}) => {
    let auth = useAuth()

    return (
        <Route 
            {...rest}
            render={({location}) => {
                return auth.user ? (
                    children
                ) : (
                    <Redirect 
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