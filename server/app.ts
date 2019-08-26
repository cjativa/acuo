import * as express from 'express';
import * as expressSession from 'express-session';
import * as path from 'path';

import { Config } from './utils/config';

import { isSessionAuthenticated } from './api/middleware/authenticationMiddleware';

import { apiRouter } from './api/routes/apiRoutes';
import { userRouter } from './api/routes/userRoutes';

const app = express();

const session = expressSession({
    secret: 'abcdeg',
    saveUninitialized: false,
    resave: false
});

app.use(express.json());
app.use(session);
app.use(express.static(path.join(__dirname, 'build')));

// Protect these routes with session authentication
app.use('/api/user', isSessionAuthenticated, userRouter)

// General api routes
app.use('/api', apiRouter);

const buildPath = path.join(__dirname, '/build', 'index.html');

app.get('/*', (request, response) => {
	response.sendFile(buildPath);
});

app.listen(Config.port, () => {
	console.log(`Server listening on port ${Config.port}`);
});