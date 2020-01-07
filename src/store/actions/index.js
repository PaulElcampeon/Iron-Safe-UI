export const EDIT_CREDENTIAL = 'EDIT_CREDENTIAL'; //should be middleware that will update the credentialstate
export const ADD_CREDENTIAL = 'ADD_CREDENTIAL'; //should be middleware that will update the credentialstate
export const ADD_CREDENTIALS = 'ADD_CREDENTIALS'; //should be middleware that will update the credentialstate
export const REMOVE_CREDENTIAL_DATA_BASE = 'REMOVE_CREDENTIAL_DATA_BASE'
export const ADD_CREDENTIAL_DATA_BASE = 'REMOVE_CREDENTIAL_DATA_BASE'
export const REMOVE_CREDENTIAL = 'REMOVE_CREDENTIAL'; //should be middleware that will update the credentialstate
export const LOGIN = 'LOGIN'; //should be a middleware
export const LOGOUT = 'LOGOUT';//should be a middleware
export const REGISTER = 'REGISTER';//should be a middleware
export const LOGGED_IN = 'LOGGED_IN';
export const ACTIVE_VIEW = 'ACTIVE_VIEW';
export const EDIT_CREDENTIAL_KEY_VALUE = 'EDIT_CREDENTIAL_KEY_VALUE';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const UPDATE_CREDENTIALS = 'UPDATE_CREDENTIALS';
export const UPDATE_TOKEN = 'UPDATE_TOKEN';

export const updateUser = (user) => {
    return {
        type: UPDATE_USER,
        user: user
    }
}

export const updateToken = (token) => {
    return {
        type: UPDATE_TOKEN,
        token: token
    }
}

export const updateMessage = (message) => {
    return {
        type: UPDATE_MESSAGE,
        message: message
    }
}

export const editCredentialAction = (credential) => {
    return {
        type: EDIT_CREDENTIAL,
        credential: credential
    }
}

export const addCredentialToStore = (credential) => {
    return {
        type: ADD_CREDENTIAL,
        credential: credential
    }
}

export const addCredentialsToStore = (credentials) => {
    return {
        type: ADD_CREDENTIALS,
        credentials: credentials
    }
}

export const addCredentialDB = (credential) => {
    return {
        type: ADD_CREDENTIAL_DATA_BASE,
        credential: credential
    }
}


export const removeCredentialFromStore = (credential) => {
    return {
        type: REMOVE_CREDENTIAL,
        credential: credential
    }
}

export const removeCredentialDB = (credential) => {
    return {
        type: REMOVE_CREDENTIAL_DATA_BASE,
        credential: credential
    }
}

export const registerAction = (credential) => {
    return {
        type: REGISTER,
        credential: credential
    }
}

export const loginAction = (credential) => {
    return {
        type: LOGIN,
        credential: credential
    }
}

export const logoutAction = () => {
    return {
        type: LOGOUT
    }
}

export const loggedInAction = (loggedIn) => {
    return {
        type: LOGGED_IN,
        loggedIn: loggedIn
    }
}

export const updateActiveView = (view) => {
    return {
        type: ACTIVE_VIEW,
        activeView: view
    }
}

export const editCredentialKeyAndValue = (credential) => {
    return {
        type: EDIT_CREDENTIAL_KEY_VALUE,
        credential: credential,
    }
}