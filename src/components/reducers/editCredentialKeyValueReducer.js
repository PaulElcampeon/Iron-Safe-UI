import { EDIT_CREDENTIAL_KEY_VALUE } from "../actions"

const editCredentialKeyValueReducer = (state = undefined, action) => {
    switch (action.type) {
        case EDIT_CREDENTIAL_KEY_VALUE:
            return action.credential;
        default:
            return state;
    }
}

export default editCredentialKeyValueReducer;