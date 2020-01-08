import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import addCredentialsMiddleware from './middleware/addCredentialsMiddleware';
import editCredentialsMiddleware from './middleware/editCredentialsMiddleware';
import removeCredentialMiddleware from './middleware/removeCredentialMiddleware';
import loginMiddleware from './middleware/loginMiddleware';
import registrationMiddleware from './middleware/registrationMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(addCredentialsMiddleware, editCredentialsMiddleware, removeCredentialMiddleware, loginMiddleware, registrationMiddleware)
));

export default store;