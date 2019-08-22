export class SignUpPayload {

    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    manager: boolean;

    constructor(firstName: string, lastName: string, email: string, username: string, password: string, manager: boolean) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.password = password;
        this.manager = manager;
    }
}

export class LoginPayload {
    identifier: string;
    password: string;

    constructor(identifier: string, password: string) {
        this.identifier = identifier;
        this.password = password;
    }
}