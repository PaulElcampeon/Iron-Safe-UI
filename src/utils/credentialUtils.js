export default class CredentialUtils {

    static isCredentialValid = (credential) => {
        let trimmedCredential = credential.trim();
        return !this.hasEmptySpaces(trimmedCredential) && !this.isEmpty(trimmedCredential) && !this.moreThan15Characters(trimmedCredential);
    }

    static hasEmptySpaces = (credential) => {
        return credential.includes(" ")
    }

    static isEmpty = (credential) => {
        return credential === "";
    }

    static moreThan15Characters = (credential) => {
        return credential.length > 15;
    }
}