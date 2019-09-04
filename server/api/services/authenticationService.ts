import * as express from 'express';

import { SignUpPayload, LoginPayload } from '../interfaces/authenticationPayloads';
import { UserDatabaseService } from '../../database/services/user';
import { ManagerDatabaseService } from '../../database/services/manager';
import { EMAIL, USERNAME } from '../constants/identifierTypes';


export class AuthenticationService {

    async signUp(sp: SignUpPayload): Promise<AuthenticationResponse> {

        const uds = new UserDatabaseService();
        const { firstName, lastName, username, email, password, manager } = sp;

        // Create the user that is signing up
        const userId = await uds.createUser(firstName, lastName, username, email, password, manager);

        // If they're a manager, create the relation
        if (manager) {
            const mds = new ManagerDatabaseService();
            await mds.createManager(userId);
        }

        return new AuthenticationResponse(true);
    }

    async login(lp: LoginPayload, request: express.Request): Promise<AuthenticationResponse> {

        const uds = new UserDatabaseService();
        const { identifier, password } = lp;
        const identifierType = this.determineIdentifierType(identifier);

        const userRows = await uds.findUser(identifier, identifierType);

        if (userRows.length === 0) {
            return new AuthenticationResponse(true, false);
        }

        else {
            const user = userRows[0];

            if (password === user.password) {

                const { userId, username, email, isManager } = user;

                // Setup the session
                request.session.authenticated = true;
                request.session.userId = userId;
                request.session.username = username;

                // If they're a manager, get the managerId
                if (isManager) {
                    const { managerId } = (await uds.getManagerId(userId));

                    request.session.managerId = managerId;
                }

                return new AuthenticationResponse(true, true);
            }

            else {
                return new AuthenticationResponse(true, false);
            }
        }
    }

    private determineIdentifierType(identifier: string): string {
        if (identifier.includes('@')) {
            return EMAIL;
        }

        else {
            return USERNAME;
        }
    }
}

class AuthenticationResponse {

    requestComplete: boolean;
    authenticated: boolean;

    constructor(requestComplete: boolean, authenticated?: boolean) {
        this.requestComplete = requestComplete;

        if (authenticated !== undefined) {
            this.authenticated = authenticated;
        }
    }
}