import * as express from 'express';

export async function signUp(request: express.Request, response: express.Response) {

    const { signUpPayload } = request.body;

}

export async function login(request: express.Request, response: express.Response) {

    const { loginPayload } = request.body;
}