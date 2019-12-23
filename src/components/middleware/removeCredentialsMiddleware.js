import { REMOVE_CREDENTIAL } from '../actions/index';
import { removeCredential } from '../../comms/commsService'

export const removeCredentialMiddleware = (state) => (next) => (action) => {
    switch (action.type) {
        case REMOVE_CREDENTIAL:
            removeCredential(action.credential, state.token)
            .then()
            .catch()
            .finally()
            break;
        default:
            next(action);
    }
  
}

export default removeCredentialMiddleware;