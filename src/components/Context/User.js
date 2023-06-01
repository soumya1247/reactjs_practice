import { useContext } from 'react'
import UserContext from './UserContext'

function User() {
    const user = useContext(UserContext)
    const { getUsers, users } = user

    const handleClick = (e) => {
        e.preventDefault()
        getUsers()
    }

    return (
        <div>
            <button onClick={handleClick}>Click</button>
            ID: { users.id}
            Name: { users.name}
        </div>
    )
}

export default User