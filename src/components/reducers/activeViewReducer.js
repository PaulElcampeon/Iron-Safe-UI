import { ACTIVE_VIEW } from '../actions';

const activeViewReducer = (state = false, action) => {
    switch(action.type) {
        case ACTIVE_VIEW: 
            return action.activeView
        default:
            return state
    }
}

export default activeViewReducer;