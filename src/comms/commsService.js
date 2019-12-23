


export const addCredential = (credential, token) => {
    return fetch('http://localhost:8080/safe/add/credential', {
                method: 'post',
                body: JSON.stringify(credential),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
}


export const removeCredential = (credential, token) => {
    return fetch('http://localhost:8080/safe/remove/credential', {
                method: 'delete',
                body: JSON.stringify(credential),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

}

export const editCredential = (credential, token) => {
    return fetch('http://localhost:8080/safe/edit/credential', {
                method: 'put',
                body: JSON.stringify(credential),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
    
}

export const attemptLogin = (credential) => {
    return fetch('http://localhost:8080/user/authenticate', {
                method: 'post',
                body: JSON.stringify(credential),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
    
}

export const attemptRegistration = (credential) => {
    return fetch('http://localhost:8080/user/create', {
                method: 'post',
                body: JSON.stringify(credential),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
    
}

export const attemptLogout = (credentials) => {

    
}