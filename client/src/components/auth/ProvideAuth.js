import React, { createContext, useContext, useState } from "react";

import {sendPost} from '../../utils/sendPost'
import {sendGet} from '../../utils/sendGet'

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
    const [loggedIn, setLoggedIn] = useState(null) // Set to null so that users aren't automatically logged in

    const signin = async (data) => { // This function should post data to the server to authenticate
        const loginInput = {
            data: data,
            url: "/login",
        }

        const res = await sendPost(loginInput)
        setLoggedIn(res.loggedIn)
        return res
    }

    const signout = async () => { // This function should post to the server to terminate session
        const logoutInput = {
            url: "/logout"
        }
        const res = await sendGet(logoutInput)
        setLoggedIn(res.loggedIn)
        return res
    }

    const checkAuth = async () => { // Checks whether authenticated
        const authInput = {
            url: "/authenticate",
            credentials: 'include',
        }
        const res = await sendGet(authInput)
        setLoggedIn(res.loggedIn)
        return res

    }

    return { // Returns an object with the user data, as well as the signin/signout functions
        loggedIn,
        signin,
        signout,
        checkAuth,
    }
}