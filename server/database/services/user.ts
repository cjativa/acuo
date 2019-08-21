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
}