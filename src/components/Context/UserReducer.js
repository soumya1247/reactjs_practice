const UserReducer = (state, action) => {
    switch(action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: {id : 2, name: 'N2'}
            }
        default:
            return state
    }
}

export default UserReducer