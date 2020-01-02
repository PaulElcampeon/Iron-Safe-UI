import { REGISTER, updateMessage } from '../actions/index';
import { attemptRegistration } from '../../comms/commsService'
import store from '../index';
import credentialsChecker from '../../utils/registrationVerification';

export const registrationMiddleware = (state) => (next) => (action) => {
    switch (action.type) {
        case REGISTER:
            if(credentialsChecker(action.credential)) {
                attemptRegistration(action.credential)
                .then(res => res.text())
                .then(message => store.dispatch(updateMessage(message)))
                .catch(error => {
                    console.log(error)
                    store.dispatch(updateMessage(error))
                })
            } else {
                store.dispatch(updateMessage("Credentials are not valid"))
            }
            break;
        default:
            next(action);
    }
}

export default registrationMiddleware;