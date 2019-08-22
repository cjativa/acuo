import { SignUpPayload, LoginPayload } from '../interfaces/authenticationPayloads';
import { UserDatabaseService } from '../../database/services/user';
import { ManagerDatabaseService } from '../../database/services/manager';

export class AuthenticationService {

    async signUp(sp: SignUpPayload) {

        const { firstName, lastName, username, email, password, manager } = sp;
        const uds = new UserDatabaseService();

        const userId = await uds.createUser(firstName, lastName, username, email, password, manager);

        if (manager) {
            const mds = new ManagerDatabaseService();
            await mds.createManager(userId);
        }
        
    }

    login(lp: LoginPayload) {

    }
}