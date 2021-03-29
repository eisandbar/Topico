import React, { createContext, useContext, useState } from "react";

const userContext = createContext()

export const ProvideUser = ({children}) => {
    const user = useProvideUser()
    return (
        // Provides all the context values to its children
        <userContext.Provider value={user}>
            {children}
        </userContext.Provider>
    )
}
export const useUser = () => {
    return useContext(userContext)
}

const useProvideUser = () => {
    const [user, setUser] = useState({})
    return {user, setUser}
}