import * as express from 'express';

import { UserService } from '../services/userService';

export async function getUserInformation(request: express.Request, response: express.Response) {

    const { userId } = request.session;

    const userInformation = await new UserService().getUserInformation(userId);

    response.json(userInformation);
}
