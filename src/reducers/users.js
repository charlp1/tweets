import {
    ADD_USER,
} from './../constants/users';

export const usersInitialState = {};

export const users = (
    state = usersInitialState,
    action
) => {
    const users = state;
    const {type, payload} = action;

    switch(type) {
        case ADD_USER:
            return {
                ...users,
                [payload.username]: payload
            };
        default:
            return users;
    }
};
