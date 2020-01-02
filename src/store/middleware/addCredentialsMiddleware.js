import { ADD_CREDENTIAL, updateMessage, updateCredentials } from '../actions/index';
import { addCredential } from '../../comms/commsService'
import store from '../index';

export const addCredentialMiddleware = (state) => (next) => (action) => {
    switch (action.type) {
        case ADD_CREDENTIAL:
            // If successful we can add credential to credential state
            addCredential(action.credential, store.getState().token)
            .then(res => res.json())
            .then(response => {
                    if (response) { 
                        store.dispatch(updateMessage('Credential was added'))
                        store.dispatch(updateCredentials([action.credential.key.concat('.').concat(action.credential.value)]))
                    } else {
                        store.dispatch(updateMessage('Credential was not added'))
                    }
                }  
                )
            .catch(error => {
                console.log(error)
                store.dispatch(updateMessage("Something went wrong"))
            })
            break;
        default:
            next(action);
    }
}

export default addCredentialMiddleware;