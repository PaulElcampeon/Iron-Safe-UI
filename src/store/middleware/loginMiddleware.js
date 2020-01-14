import { LOGIN, updateMessage, updateToken, addCredentialsToStore, updateUser, updateActiveView, loggedInAction } from '../actions/index';
import { attemptLogin } from '../../comms/commsService'
import credentialsChecker from '../../utils/loginPreVerification';
import SessionManager from '../../utils/sessionManager';
import store from '../index';

export const loginMiddleware = (state) => (next) => (action) => {
    switch (action.type) {
        case LOGIN:
            if (credentialsChecker(action.credential)) {
                attemptLogin(action.credential)
                .then(res => res.json())
                .then(data => {
                    if (data.status && data.status !== 202) {
                        store.dispatch(updateMessage("Something wrong happened"))                       
                    } else {
                        SessionManager.updateSession()
                        store.dispatch(updateToken(data.jwt));
                        store.dispatch(updateUser(data.safe.email));
                        store.dispatch(addCredentialsToStore(data.safe.credentials));
                        store.dispatch(loggedInAction(true));
                        store.dispatch(updateMessage(null))
                        store.dispatch(updateActiveView("lobby"));
                    }
                })
                .catch(error => {
                    console.log(error.message)
                    store.dispatch(updateMessage("Something wrong happened"))
                })
            } else {
                store.dispatch(updateMessage("Credentials are not valid"))
            }
            break;
        default:
            next(action);
    }
}

export default loginMiddleware;