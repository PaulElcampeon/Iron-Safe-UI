import { UPDATE_TOKEN } from '../actions';

const updateTokenReducer = (state = undefined, action) => {
    switch(action.type) {
        case UPDATE_TOKEN: 
            return action.token
        default:
            return state
    }
}

export default updateTokenReducer;