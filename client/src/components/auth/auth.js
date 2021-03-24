import React, { createContext, useContext, useState } from "react";

const authContext = createContext()

const funcAuth = {
    isAuthenticated: false,
    signin(cb) {
      funcAuth.isAuthenticated = true
      setTimeout(cb, 100) // fake async
    },
    signout(cb) {
      funcAuth.isAuthenticated = false
      setTimeout(cb, 100)
    }
}


export const ProvideAuth = ({children}) => {
    const auth = useProvideAuth()
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(authContext)
}

const useProvideAuth = () => {
    const [user, setUser] = useState("user")

    const signin = (callback) => {
        return funcAuth.signin((res) => {
            setUser("user")
            callback()
        })
    }

    const signout = (callback) => {
        return funcAuth.signout((res) => {
            setUser(null)
            callback()
        })
    }

    return {
        user,
        signin,
        signout,
    }
}