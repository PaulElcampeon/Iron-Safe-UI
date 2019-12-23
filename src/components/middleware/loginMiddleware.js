import { LOGIN } from '../actions/index';
import { login } from '../../comms/commsService'

export const loginMiddleware = (state) => (next) => (action) => {
    switch (action.type) {
        case LOGIN:
            login(action.credential)
            .then()
            .catch()
            .finally()
            break;
        default:
            next(action);
    }
}

export default loginMiddleware;