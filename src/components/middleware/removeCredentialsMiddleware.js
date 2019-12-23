import { REMOVE_CREDENTIAL, updateMessage } from '../actions/index';
import { removeCredential } from '../../comms/commsService'
import store from '../store';

export const removeCredentialMiddleware = (state) => (next) => (action) => {
    switch (action.type) {
        case REMOVE_CREDENTIAL:
            removeCredential(action.credential, state.token)
            .then(res => res.text())
            .then(response => {
                    response? 
                    store.dispatch(updateMessage('Credential was removed')) 
                    :
                    store.dispatch(updateMessage('Credential was not removed'))
                }  
                )
            .catch(error => store.dispatch(updateMessage("Something went wrong")))
            break;
        default:
            next(action);
    }
  
}

export default removeCredentialMiddleware;