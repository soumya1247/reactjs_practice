import { Outlet, Navigate } from 'react-router-dom'

function PrivatePage() {
    const login = false

    return login ? <Outlet /> : <Navigate to = '/signup' />
}

export default PrivatePage