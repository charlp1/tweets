import { createStore } from 'redux';

import reducers from './reducers';
import { usersInitialState } from './reducers/users';
import { userInitialState } from './reducers/user';
import { tweetsInitialState } from './reducers/tweets';

const initialState = {
    users: usersInitialState,
    user: userInitialState,
    tweets: tweetsInitialState,
};

const store = createStore(
    reducers,
    initialState
);

export default store;
