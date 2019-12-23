import { LOGGED_IN } from '../actions';

const loggedInReducer = (state = false, action) => {
    switch(action.type) {
        case LOGGED_IN: 
            return action.loggedIn
        default:
            return state
    }
}

export default loggedInReducer;