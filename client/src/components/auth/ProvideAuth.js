import React, { createContext, useContext, useState } from "react";
import {funcAuth} from './funcAuth'

/* 
    ProvideAuth is a component that provides authentication to its children.
    The way it does so is by  creating a authContext context, which contains
    user data as well as a signin and signout function.

    If logged out auth.user === null, otherwise logged in as auth.user.
*/


const authContext = createContext() // Creates the context used for authentication.

export const ProvideAuth = ({children}) => { // The main react component
    const auth = useProvideAuth() // Creates the values with the useProvideAuth hook
    return (
        // Provides all the context values to its children
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    )
}

export const useAuth = () => { // Custom hook to use authContext
    return useContext(authContext)
}

const useProvideAuth = () => { // Custom hook to create the user state and signin/signout functions
    const [user, setUser] = useState("user") // Set to null so that users aren't automatically logged in

    const signin = (callback) => { // This function should post data to the server to authenticate
        return funcAuth.signin((res) => {
            setUser("user")
            callback()
        })
    }

    const signout = (callback) => { // This function should post to the server to terminate session
        return funcAuth.signout((res) => {
            setUser(null)
            callback()
        })
    }

    return { // Returns an object with the user data, as well as the signin/signout functions
        user,
        signin,
        signout,
    }
}