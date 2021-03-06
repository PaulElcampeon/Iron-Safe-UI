import { combineReducers } from 'redux';
import loggedInReducer from './loggedInReducer';
import updateCredentialsReducer from './updateCredentialsReducer';
import updateMessageReducer from './updateMessageReducer';
import updateUserReducer from './updateUserReducer';
import updateTokenReducer from './updateTokenReducer';

const rootReducer = combineReducers({
    user: updateUserReducer,
    loggedIn: loggedInReducer,
    credentials: updateCredentialsReducer,
    genericMessage: updateMessageReducer,
    token: updateTokenReducer
})

export default rootReducer;