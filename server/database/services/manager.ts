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

    async assignEmployees(manager_id: string, user_ids: string[]) {

        try {
            await knex
                .from(t.users)
                .update({ manager_id })
                .whereIn('manager_id', user_ids);
        }

        catch (error) {
            console.log(`Could not assign users to manager id ${manager_id}`, error);
        }

    }

    async getAssignedEmployees(manager_id: string) {
        try {
            const rows = await knex
                .select('first_name as firstName', 'last_name as lastName', 'id as userId')
                .from(t.users)
                .where({ manager_id });

            return rows;
        }

        catch (error) {
            console.log(`Could not get employees assigned to ${manager_id}`, error);
        }
    }

    async getAvailableEmployees(manager_id): Promise<any[]> {
        try {
            const rows = await knex
                .select('first_name as firstName', 'last_name as lastName', 'id as userId')
                .from(t.users)
                .where({ is_manager: false })
                .where(function () {
                    this
                        .andWhereNot({ manager_id })
                        .orWhere({ manager_id: null })
                });

            return rows;
        }

        catch (error) {
            console.log(`Could not retrieve available employees`, error);
        }
    }
}