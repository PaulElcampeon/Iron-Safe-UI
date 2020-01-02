import { combineReducers } from 'redux';
import activeViewReducer from './activeViewReducer';
import editCredentialKeyValueReducer from './editCredentialKeyValueReducer';
import loggedInReducer from './loggedInReducer';
import updateCredentialsReducer from './updateCredentialsReducer';
import updateMessageReducer from './updateMessageReducer';
import updateUserReducer from './updateUserReducer';
import updateTokenReducer from './updateTokenReducer';

const rootReducer = combineReducers({
    user: updateUserReducer,
    loggedIn: loggedInReducer,
    activeView: activeViewReducer,
    credentials: updateCredentialsReducer,
    genericMessage: updateMessageReducer,
    currentEditKeyAndValue: editCredentialKeyValueReducer,
    token: updateTokenReducer
})

export default rootReducer;