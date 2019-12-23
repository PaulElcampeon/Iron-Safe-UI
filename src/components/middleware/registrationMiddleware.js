import { REGISTER, updateMessage } from '../actions/index';
import { attemptRegistration } from '../../comms/commsService'
import store from '../store';

export const registrationMiddleware = (state) => (next) => (action) => {
    switch (action.type) {
        case REGISTER:
            attemptRegistration(action.credential)
            .then(res => res.text())
            .then(message => store.dispatch(updateMessage(message)))
            .catch(error => store.dispatch(updateMessage(error)))
            break;
        default:
            next(action);
    }
}

export default registrationMiddleware;