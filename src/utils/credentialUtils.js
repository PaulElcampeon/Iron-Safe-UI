export default class CredentialUtils {

    static isCredentialValid = (credential) => {
        let trimmedCredential = credential.trim();
        return !this.hasEmptySpaces(trimmedCredential) && !this.isEmpty(trimmedCredential) && !this.moreThan20Characters(trimmedCredential);
    }

    static hasEmptySpaces = (credential) => {
        return credential.includes(" ")
    }

    static isEmpty = (credential) => {
        return credential === "";
    }

    static moreThan20Characters = (credential) => {
        return credential.length > 20;
    }
}