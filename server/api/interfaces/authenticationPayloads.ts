export interface SignUpPayload {

    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    manager: boolean;
}

export interface LoginPayload {
    identifier: string;
    password: string;
}