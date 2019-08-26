import { ManagerDatabaseService } from '../../database/services/manager';

export class ManagerService {

    async getManagerInformation() {

    }

    async getAssignedEmployees(managerId: string) {
        const employees = await new ManagerDatabaseService().getAssignedEmployees(managerId);

        console.log(employees);
    }

    async getAvailableEmployees(managerId: string) {
        const employees = await new ManagerDatabaseService().getAvailableEmployees(managerId);

        console.log(employees);
    }

    async assignUsersToManager(managerId: string, users: string[]) {
        await new ManagerDatabaseService().assignEmployees(managerId, users);
    }
}