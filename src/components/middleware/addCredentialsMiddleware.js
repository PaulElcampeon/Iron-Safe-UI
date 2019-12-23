import { ADD_CREDENTIAL, updateMessage } from '../actions/index';
import { addCredential } from '../../comms/commsService'
import store from '../store';

export const addCredentialMiddleware = (state) => (next) => (action) => {
    switch (action.type) {
        case ADD_CREDENTIAL:
            // If successful we can add credential to credential state
            addCredential(action.credential, state.token)
            .then(res => res.text())
            .then(response => {
                    response? 
                    store.dispatch(updateMessage('Credential was added')) 
                    :
                    store.dispatch(updateMessage('Credential was not added'))
                }  
                )
            .catch(error => store.dispatch(updateMessage("Something went wrong")))
            break;
        default:
            next(action);
    }
}

export default addCredentialMiddleware;