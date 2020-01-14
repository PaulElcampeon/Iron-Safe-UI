const credentialMapper = (credentials) => {
    const fromServer = credentialsFromServer(credentials);
    return fromServer?  credentials.map((credential) => {
        let tempArray = credential.split(".");
        return {"key": tempArray[0], "value": tempArray[1]}
    }) : credentials
}

const credentialsFromServer = (credentials) => {
    if (credentials && credentials.length > 0) {
        return !credentials[0].hasOwnProperty('key');
    }
    return false;
}

export default credentialMapper;
