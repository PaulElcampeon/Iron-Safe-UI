import { ADD_CREDENTIAL_DATA_BASE, updateMessage, addCredentialToStore } from '../actions/index';
import CredentialUtils from '../../utils/credentialUtils';
import { addCredential } from '../../comms/commsService'
import store from '../index';
export const addCredentialMiddleware = (state) => (next) => (action) => {
    switch (action.type) {
        case ADD_CREDENTIAL_DATA_BASE:
            if (CredentialUtils.isCredentialValid(action.credential.value) && CredentialUtils.isCredentialValid(action.credential.key)) {
                addCredential(action.credential, store.getState().token)
                .then(res => res.json())
                .then(response => {
                        if (response) { 
                            store.dispatch(updateMessage('Credential was added'))
                            store.dispatch(addCredentialToStore(action.credential))
                        } else {
                            store.dispatch(updateMessage('Credential was not added'))
                        }
                })
                .catch(error => {
                    console.log(error)
                    store.dispatch(updateMessage("Something went wrong"))
                })
            } else {
                store.dispatch(updateMessage('Credentials were invalid \n Credentials must not contain empty spaces \n Credentials must not exceed more than 20 characters'))
            }
            break;
        default:
            next(action);
    }
}

export default addCredentialMiddleware;

//Need to sort out reducer for updating tournaments, currently it is a shambles.
//possibly have differnet actions for deleting and adding credentials