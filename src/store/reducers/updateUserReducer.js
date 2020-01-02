import { UPDATE_USER } from '../actions';

const userReducer = (state = null, action) => {
    switch(action.type) {
        case UPDATE_USER: 
            return action.user
        default:
            return state
    }
}

export default userReducer;