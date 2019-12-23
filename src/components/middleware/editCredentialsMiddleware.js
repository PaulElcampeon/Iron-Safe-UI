import { EDIT_CREDENTIAL, updateMessage } from '../actions/index';
import { editCredential } from '../../comms/commsService'
import store from '../store';

export const editCredentialMiddleware = (state) => (next) => (action) => {
    switch (action.type) {
        case EDIT_CREDENTIAL:
            // If successful we can add credential to credential state
            editCredential(action.credential, state.token)
            .then(response => {
                response? 
                store.dispatch(updateMessage('Credential was updated')) 
                :
                store.dispatch(updateMessage('Credential was not updated'))
            }  
            )
        .catch(error => store.dispatch(updateMessage("Something went wrong")))
            break;
        default:
            next(action);
    }
}

export default editCredentialMiddleware;