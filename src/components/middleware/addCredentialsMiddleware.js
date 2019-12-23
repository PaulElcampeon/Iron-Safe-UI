import { ADD_CREDENTIAL } from '../actions/index';
import { addCredential } from '../../comms/commsService'

export const addCredentialMiddleware = (state) => (next) => (action) => {
    switch (action.type) {
        case ADD_CREDENTIAL:
            addCredential(action.credential, state.token)
            .then()
            .catch()
            .finally()
            break;
        default:
            next(action);
    }
}

export default addCredentialMiddleware;