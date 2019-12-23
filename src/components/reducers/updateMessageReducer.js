import { UPDATE_MESSAGE } from "../actions"

const updateMessageReducer = (state = undefined, action) => {
    switch(action.type) {
        case UPDATE_MESSAGE: 
            return action.mesage;
        default:
            return state;

    }
}

export default updateMessageReducer;