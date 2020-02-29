import { combineReducers } from 'redux'; 

import userReducer from './../redux/user-reducer/user.reducer.jsx';

export default combineReducers({
    user: userReducer
});