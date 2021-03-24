import React, { createContext, useContext, useState } from "react";

import {sendPost} from '../../utils/sendPost'

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
    const [user, setUser] = useState(null) // Set to null so that users aren't automatically logged in

    const signin = async (data) => { // This function should post data to the server to authenticate
        const loginInput = {
            data: data,
            url: "/login",
        }

        const res = await sendPost(loginInput)
        if (res.userId) setUser(res.userId)
        return res
    }

    const signout = async () => { // This function should post to the server to terminate session
        return setUser(null)
    }

    return { // Returns an object with the user data, as well as the signin/signout functions
        user,
        signin,
        signout,
    }
}