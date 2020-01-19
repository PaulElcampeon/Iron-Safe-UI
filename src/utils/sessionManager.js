import store from '../store/index';
import { updateMessage, updateToken, addCredentialsToStore, updateUser, loggedInAction } from '../store/actions/index';

class SessionManager {
    constructor() {
        this.unsubscribeListener = null;
    }

    static storeUserData = (userData) => {
        sessionStorage.setItem('Iron-Safe', JSON.stringify(userData));
    }

    static doesUserDataExist = () => {
       return sessionStorage.getItem('Iron-Safe');
    }

    static getUserData = () => {
        return JSON.parse(sessionStorage.getItem('Iron-Safe'));
    }

    static removeUserData = () => {
        this.unsubscribeListener();
        sessionStorage.removeItem('Iron-Safe')
    }

    static updateSession = () => {
        this.unsubscribeListener = store.subscribe(()=> {
            sessionStorage.setItem('Iron-Safe', JSON.stringify(store.getState()));
        })
    }

    static restoreSession = () => {
        if (this.doesUserDataExist()) {
            if (!this.unsubscribeListener) {
                this.updateSession()
            }
            const userData = this.getUserData();
            store.dispatch(updateToken(userData.token));
            store.dispatch(updateUser(userData.user));
            store.dispatch(addCredentialsToStore(userData.credentials));
            store.dispatch(loggedInAction(true));
            store.dispatch(updateMessage(null))
        }
    }
}

export default SessionManager;