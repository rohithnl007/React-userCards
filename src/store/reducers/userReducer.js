import { ADD_USER, GET_USERS } from '../actions/actionTypes';

const initialState = {
    allUsers: []
};

const userIdGenerator = (users) => {
    const nextUserId = users.reduce((latestId, user) => Math.max(user.id, latestId), -1);
    return nextUserId + 1;
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                // allUsers: [
                //     ...state.allUsers.concat(action.payload)
                // ]
                allUsers: [
                    ...state.allUsers,
                    {
                        id: userIdGenerator(state.allUsers),
                        name: action.payload.name,
                        email: action.payload.email,
                        designation: action.payload.designation
                    }
                ]
            }
        case GET_USERS:
            return {
                ...state.allUsers
            }
        default:
            return state;
    }

};

export default userReducer;