import {
    ADD_TWEET,
    EDIT_TWEET,
    DELETE_TWEET,
} from './../constants/tweets';

export const tweetsInitialState = {
    counter: 1,
    data: {}
};

export const tweets = (
    state = tweetsInitialState,
    action
) => {
    const {counter, data} = state;
    const {type, payload} = action;

    switch(type) {
        case ADD_TWEET:
            return {
                ...state,
                counter: (counter + 1),
                data: {
                    ...data,
                    [counter]: {
                        ...payload,
                        id: counter
                    }
                }
            }
        case EDIT_TWEET:
            return {
                ...state,
                data: {
                    ...data,
                    [payload.id]: payload
                }
            };
        case DELETE_TWEET:
            let updatedData = { ...data };
            delete updatedData[payload.id];

            return {
                ...state,
                data: updatedData
            };
        default:
            return state;
    }
};
