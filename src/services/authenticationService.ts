export class AuthenticationService {

    signUp(email: string, username: string, password: string) {
        console.log(email, username, password)
    }

    login(identifier: string, password: string) {
        console.log(identifier, password);
    }
}