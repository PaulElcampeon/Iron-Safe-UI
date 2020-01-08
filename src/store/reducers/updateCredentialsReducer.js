import { REMOVE_CREDENTIAL, ADD_CREDENTIAL, ADD_CREDENTIALS } from "../actions"

const updateCredentialsReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_CREDENTIALS:
            return action.credentials.map((credential) => {
                    let tempArray = credential.split(".");
                    return {"key": tempArray[0], "value": tempArray[1]}
                })
        case ADD_CREDENTIAL:
            console.log(`Adding the following credential + ${action.credential}`)
            return [...state, action.credential];
        case REMOVE_CREDENTIAL:
            console.log(`Removing the following credential + ${action.credential}`)
            return state.filter(credential => credential !== action.credential)
        default:
            return state;
    }
}

export default updateCredentialsReducer;