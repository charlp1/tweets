import { combineReducers } from 'redux';
import { users } from './users';
import { user } from './user';
import { tweets } from './tweets';

export default combineReducers({
    users,
    user,
    tweets,
});
