import { UserDatabaseService } from '../../database/services/user';

export class UserService {

    async getUserInformation(userId: string) {
        const userInformation = await new UserDatabaseService().getUser(userId);
        
        return userInformation;
    }
}