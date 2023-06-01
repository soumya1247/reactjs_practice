import { createContext, useReducer } from 'react'
import UserReducer from './UserReducer'

const UserContext = createContext()

export function UserContextProvider({ children }) {
    const initialState = { users: { id: 1, name: 'N1' } }
    const [state, dispatch] = useReducer(UserReducer, initialState)

    const getUsers = () => {
        dispatch({
            type: 'GET_USERS'
        })
    }
    const addUsers = {}

    return (
        <UserContext.Provider
            value={{
                users: state.users,
                getUsers,
                addUsers
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserContext