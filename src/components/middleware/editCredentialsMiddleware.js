import { EDIT_CREDENTIAL } from '../actions/index';
import { editCredential } from '../../comms/commsService'

export const editCredentialMiddleware = (state) => (next) => (action) => {
    switch (action.type) {
        case EDIT_CREDENTIAL:
            editCredential(action.credential, state.token)
            .then()
            .catch()
            .finally()
            break;
        default:
            next(action);
    }
}

export default editCredentialMiddleware;