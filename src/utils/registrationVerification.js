const verify = ({email, confirmEmail, password, confirmPassword}) => {
    const valid = email.includes('.') && email.includes('@') &&  
    confirmEmail.includes('.') && confirmEmail.includes('@') && 
    password.length >= 5 && confirmPassword.length >= 5
    return valid;
}

export default verify;