import { ADD_USER, GET_USERS } from '../actions/actionTypes';

export const addUserAction = (name, email, designation) => {
    console.log('action 00 >>> ', name, email, designation);
    return {
        type: ADD_USER,
        payload: {
            name: name,
            email: email,
            designation: designation
        }
    }
}

export const getAllUsersAction = () => {
    return {
        type: GET_USERS
    }
}