import { SignUpPayload, LoginPayload } from '../interfaces/authenticationPayloads';
import { UserDatabaseService } from '../../database/services/user';
import { ManagerDatabaseService } from '../../database/services/manager';

export class AuthenticationService {

    async signUp(sp: SignUpPayload) {

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

    login(lp: LoginPayload) {

    }
}

class AuthenticationResponse {

    requestComplete: boolean;

    constructor(requestComplete: boolean) {
        this.requestComplete = requestComplete;
    }
}