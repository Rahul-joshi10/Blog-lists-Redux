import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';


//store
export default combineReducers({
    posts: postsReducer,
    users: usersReducer
});