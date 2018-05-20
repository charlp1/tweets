import {
    LOGIN_USER,
    LOGOUT_USER,
} from './../constants/user';

export const userInitialState = '';

export const user = (
    state = userInitialState,
    action
) => {
    const {type, payload} = action;

    switch(type) {
        case LOGIN_USER:
            return payload;
        case LOGOUT_USER:
            return '';
        default:
            return state;
    }
};
