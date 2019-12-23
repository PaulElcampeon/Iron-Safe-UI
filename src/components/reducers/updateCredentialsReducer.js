import { UPDATE_CREDENTIALS } from "../actions"

const updateCredentialsReducer = (state = [], action) => {
    switch(action.type) {
        case UPDATE_CREDENTIALS: 
            return action.credentials;
        default:
            return state;
    }
}

export default updateCredentialsReducer;