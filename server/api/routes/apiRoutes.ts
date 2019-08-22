import * as express from 'express';

import * as ac from '../controllers/authenticationController';

export const apiRouter = express.Router();

apiRouter.post('/login', ac.login);
apiRouter.post('/signUp', ac.signUp);