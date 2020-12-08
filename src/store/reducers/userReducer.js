import { ADD_USER, GET_USERS } from '../actions/actionTypes';

const initialState = {
    allUsers: [],
    user: {
        name: '',
        email: '',
        designation: ''
    }
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                user: {
                    ...state.user,
                    name: action.payload.name,
                    email: action.payload.email,
                    designation: action.payload.designation
                },
                allUsers: [
                    ...state.allUsers.concat(state.user)
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