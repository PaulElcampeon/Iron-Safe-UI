const verify = ({email, password}) => {
    const valid = email.includes('.') && email.includes('@') && password.length >= 5
    return valid;
}

export default verify;