import axios from 'axios';

import { LoginPayload, SignUpPayload } from '../classes/authenticationClasses';
import { AuthenticationResponse } from '../interfaces/authenticationPayloads';

export class AuthenticationService {

    async signUp(firstName: string, lastName: string, email: string, username: string, password: string, manager: boolean) {
        
        const signUpPayload = new SignUpPayload(firstName, lastName, email, username, password, manager);

        try {
            const response = (await axios({ method: 'post', url: '/api/signUp', data: { signUpPayload } })).data as AuthenticationResponse;
            console.log(response);
        }

        catch (error) {
            console.log('Could not sign up user', error);
        }
    }

    login(identifier: string, password: string) {
        const loginPayload = new LoginPayload(identifier, password);
    }
}

