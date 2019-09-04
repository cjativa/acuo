import * as express from 'express';

import * as uc from '../controllers/userController';
import * as mc from '../controllers/managerController';

export const userRouter = express.Router();

userRouter.get('/', uc.getUserInformation);
userRouter.get('/manager', mc.getEmployees);
userRouter.post('/manager', mc.assignUsersToManager);