import * as express from 'express';
import * as expressSession from 'express-session';
import * as path from 'path';

const app = express();

const session = expressSession({
    secret: 'abcdeg',
    saveUninitialized: false,
    resave: false
});

app.use(express.json());
app.use(session);

app.listen(4000, () => {
	console.log(`Server listening on port 4000`);
});