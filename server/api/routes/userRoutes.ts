import * as express from 'express';

import * as uc from '../controllers/userController';
import * as mc from '../controllers/managerController';

export const userRouter = express.Router();

userRouter.get('/user', (request, response, next) => { console.log('Hi')});
userRouter.post('/userAddToManager', mc.assignUsersToManager)