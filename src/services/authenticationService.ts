export class AuthenticationService {

    signUp(firstName: string, lastName: string, email: string, username: string, password: string, manager: boolean) {
        console.log(firstName, lastName, email, username, password, manager);
    }

    login(identifier: string, password: string) {
        console.log(identifier, password);
    }
}