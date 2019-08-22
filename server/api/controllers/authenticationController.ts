import * as express from 'express';

import { AuthenticationService } from '../services/authenticationService';

export async function signUp(request: express.Request, response: express.Response) {

    const as = new AuthenticationService();
    const { signUpPayload } = request.body;

    const ar = await as.signUp(signUpPayload);

    response.json('Hi');
}

export async function login(request: express.Request, response: express.Response) {

    const { loginPayload } = request.body;
}