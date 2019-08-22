import { knex } from '../knex';
import { tables as t } from '../tables';

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
}