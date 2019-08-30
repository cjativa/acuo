import * as express from 'express';

export const isSessionAuthenticated = async (request: express.Request, response: any, next) => {

    // Check that the user has a uuid -- meaning the session exists
	if (request.session.authenticated == true) {
		next();
	}

	else {
		if (request.originalUrl.includes('/api/')) {
			response.status(403).json({
				status: 403,
				message: 'NO VALID SESSION EXISTS'
			});
		}

		else {
            console.log('re');
			response.redirect('/');
		}
	}
}