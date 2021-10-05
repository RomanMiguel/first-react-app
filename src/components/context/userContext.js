import { useState, createContext} from 'react'

const UserContext = createContext()

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState()

    const login = (objUser) => {
        setUser(objUser.username)
    }

    const logout = () => {
        setUser()
    }

    return (
        <UserContext.Provider 
            value={{
              user,
              login,
              logout
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserContext