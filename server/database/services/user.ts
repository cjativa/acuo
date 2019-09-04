import { knex } from '../knex';
import { tables as t } from '../tables';
import { EMAIL, USERNAME } from '../../api/constants/identifierTypes';
import { UserInformation } from '../../api/interfaces/userDatabasePayloads';

export class UserDatabaseService {

    async getUserId(username: string): Promise<string> {

        try {
            const rows = await knex
                .from(t.users)
                .where({ username });

            if (rows.length == 0) {
                return null;
            }

            else {
                const { id } = rows[0];
                return id;
            }
        }

        catch (error) {
            console.log(`Could not get the User Id for username ${username} in Users table`, error);
        }
    }

    async createUser(first_name: string, last_name: string, username: string, email: string, password: string, is_manager: boolean): Promise<string> {
        try {
            const rows = await knex
                .from(t.users)
                .insert({ first_name, last_name, username, email, password, is_manager, manager_id: null })
                .returning('id');

            const id = rows[0];

            return id;
        }

        catch (error) {
            console.log(`Could not create user for ${email}`, error);
        }
    }

    async findUser(identifier: string, identifierType: string) {

        try {
            let rows: any[];

            if (identifierType === EMAIL) {
                rows = await knex
                    .select('id as userId', 'username', 'email', 'password', 'is_manager as isManager')
                    .from(t.users)
                    .where({ email: identifier });
            }

            else {
                rows = await knex
                    .select('id as userId', 'username', 'email', 'password', 'is_manager as isManager')
                    .from(t.users)
                    .where({ username: identifier });
            }

            return rows;
        }

        catch (error) {
            console.log(`Could not find user for identifier type ${identifierType} and identifier ${identifier}`, error);
        }
    }

    async getManagerId(user_id: string) {
        try {
            const rows = await knex
                .select('id as managerId')
                .from(t.managers)
                .where({ user_id });

            return rows[0];
        }

        catch (error) {
            console.log(`Could not get the Manager Id for user id ${user_id} in Managers table`, error);
        }
    }

    async getUser(id: string): Promise<UserInformation> {

        try {
            const rows = await knex
                .select('first_name as firstName', 'last_name as lastName', 'username', 'email', 'is_manager as isManager')
                .from(t.users)
                .where({ id });

            return rows[0];
        }

        catch (error) {
            console.log(`Could not get the user information for user id ${id} in Users table`, error);
        }
    }

    async assignEmployeeToManager(id: string, manager_id: string) {
        try {
            await knex
                .from(t.users)
                .update({ manager_id })
                .where({ id });
        }

        catch (error) {
            console.log(`Could not assign User Id ${id} to Manager Id ${manager_id}`, error);
        }
    }
}