import { ADD_USER } from './../constants/users';

export const addUser = (user) => ({
    type: ADD_USER,
    payload: user
});
