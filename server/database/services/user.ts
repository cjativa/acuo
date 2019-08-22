import { knex } from '../knex';
import { tables as t } from '../tables';
import { EMAIL, USERNAME } from '../../api/constants/identifierTypes';

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
                    .select('id', 'username', 'email', 'password')
                    .from(t.users)
                    .where({ email: identifier });
            }

            else {
                rows = await knex
                    .select('id', 'username', 'email', 'password')
                    .from(t.users)
                    .where({ username: identifier });
            }

            return rows;
        }

        catch (error) {
            console.log(`Could not find user for identifier type ${identifierType} and identifier ${identifier}`, error);
        }
    }
}