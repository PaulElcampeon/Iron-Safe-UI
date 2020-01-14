import { LOGOUT, updateMessage, updateActiveView, updateToken, removeAllCredentials, updateUser, loggedInAction } from '../actions/index';
import SessionManager from '../../utils/sessionManager';
import store from '../index';

export const logoutMiddleware = (state) => (next) => (action) => {
    switch (action.type) {
        case LOGOUT:
            store.dispatch(loggedInAction(false));
            store.dispatch(updateToken(null));
            store.dispatch(updateUser(null));
            store.dispatch(updateMessage(null));
            store.dispatch(removeAllCredentials());
            store.dispatch(updateActiveView(null));
            SessionManager.removeUserData();
            break;
        default:
            next(action);
    }
}

export default logoutMiddleware;