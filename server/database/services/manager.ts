import { knex } from '../knex';
import { tables as t } from '../tables';

export class ManagerDatabaseService {

    async createManager(user_id: string) {
        try {
            await knex
                .from(t.managers)
                .insert({ user_id });
        }

        catch (error) {
            console.log(`Could not create user for ${user_id}`, error);
        }
    }
}