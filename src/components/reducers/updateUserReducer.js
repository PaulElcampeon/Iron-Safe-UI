import { UPDATE_USER } from '../actions';

const userReducer = (state = undefined, action) => {
    switch(action.type) {
        case UPDATE_USER: 
            return action.user
        default:
            return state
    }
}

export default userReducer;