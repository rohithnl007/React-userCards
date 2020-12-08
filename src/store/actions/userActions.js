import { ADD_USER, GET_USERS } from '../actions/actionTypes';

export const addUserAction = (userData) => {
    return {
        type: ADD_USER,
        payload: {
            name: userData.name,
            email: userData.email,
            designation: userData.designation
        }
    }
}

export const getAllUsersAction = () => {
    return {
        type: GET_USERS
    }
}