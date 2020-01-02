import { UPDATE_CREDENTIALS } from "../actions"

const updateCredentialsReducer = (state = [], action) => {
    switch(action.type) {
        case UPDATE_CREDENTIALS: 
            return state.concat(action.credentials.map((credential) => {
                        let tempArray = credential.split(".");
                        return {"key": tempArray[0], "value": tempArray[1]}
                    }))
        default:
            return state;
    }
}

export default updateCredentialsReducer;