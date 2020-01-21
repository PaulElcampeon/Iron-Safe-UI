export const addCredential = (credential, token) => {
    return fetch('/safe/add/credential', {
        method: 'post',
        body: JSON.stringify(credential),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}

export const removeCredential = (credential, token) => {
    return fetch('/safe/remove/credential', {
        method: 'delete',
        body: JSON.stringify(credential),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}

export const attemptLogin = (credential) => {
    return fetch('/user/authenticate', {
        method: 'post',
        body: JSON.stringify(credential),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}

export const attemptRegistration = (credential) => {
    return fetch('/user/create', {
        method: 'post',
        body: JSON.stringify(credential),
        headers: {
            'Accept': 'text/html',
            'Content-Type': 'application/json'
        }
    })
}