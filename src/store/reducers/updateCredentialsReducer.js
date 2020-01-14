import { REMOVE_CREDENTIAL, REMOVE_CREDENTIALS, ADD_CREDENTIAL, ADD_CREDENTIALS } from "../actions"
import credentialMapper from '../../utils/credentialMapper';

const updateCredentialsReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_CREDENTIALS:
            return credentialMapper(action.credentials)
        case ADD_CREDENTIAL:
            console.log(`Adding the following credential + ${action.credential}`)
            return [...state, action.credential];
        case REMOVE_CREDENTIAL:
            console.log(`Removing the following credential + ${action.credential}`)
            return state.filter(credential => credential !== action.credential);
        case REMOVE_CREDENTIALS:
            console.log(`Removing all credentials`)
            return [];    
        default:
            return state;
    }
}

export default updateCredentialsReducer;