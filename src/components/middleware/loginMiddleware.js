import { LOGIN, updateMessage, updateToken, updateCredentials, updateUser, updateActiveView } from '../actions/index';
import { login } from '../../comms/commsService'
import store from '../store';

export const loginMiddleware = (state) => (next) => (action) => {
    switch (action.type) {
        case LOGIN:
            login(action.credential)
            .then(res => res.json())
            .then(data => {
                store.dispatch(updateToken(data.jwt));
                store.dispatch(updateUser(data.safe.email));
                store.dispatch(updateCredentials(data.safe.credentials));
                store.dispatch(updateActiveView("lobby"));
            })
            .catch(error => store.dispatch(updateMessage("Something wrong happened")))
            break;
        default:
            next(action);
    }
}

export default loginMiddleware;