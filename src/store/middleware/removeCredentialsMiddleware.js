import { REMOVE_CREDENTIAL_DATA_BASE, updateMessage, removeCredentialFromStore } from '../actions/index';
import { removeCredential } from '../../comms/commsService'
import store from '../index';

export const removeCredentialMiddleware = (state) => (next) => (action) => {
    switch (action.type) {
        case REMOVE_CREDENTIAL_DATA_BASE:
            removeCredential(action.credential, store.getState().token)
            .then(res => res.json())
            .then(response => {
                if (response) { 
                    store.dispatch(updateMessage('Credential was removed'))
                    store.dispatch(removeCredentialFromStore(action.credential)) 
                } else {
                    store.dispatch(updateMessage('Credential was not removed'))
                }
            })
            .catch(error => {
                console.log(error);
                store.dispatch(updateMessage("Something went wrong"))
            })
            break;
        default:
            next(action);
    }
  
}

export default removeCredentialMiddleware;