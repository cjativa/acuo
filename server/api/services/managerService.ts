import { ManagerDatabaseService } from '../../database/services/manager';

export class ManagerService {

    async getManagerInformation(managerId: string) {

        const mds = new ManagerDatabaseService();

        const availableEmployees = await mds.getAvailableEmployees(managerId);
        const assignedEmployees = await mds.getAssignedEmployees(managerId);

        return { availableEmployees, assignedEmployees };
    }

    async assignUsersToManager(managerId: string, users: string[]) {
        await new ManagerDatabaseService().assignEmployees(managerId, users);
    }
}