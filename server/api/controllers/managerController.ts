import * as express from 'express';

import { ManagerService } from '../services/managerService';

export async function getManagerInformation(request: express.Request, response: express.Response) {

}


export async function getEmployees(request: express.Request, response: express.Response) {

    const { managerId } = request.session;

    const employees = await new ManagerService().getManagerInformation(managerId);

    response.json(employees);
}

export async function assignUsersToManager(request: express.Request, response: express.Response) {

    const { managerId } = request.session;
    const { users } = request.body;

    await new ManagerService().assignUsersToManager(managerId, users);

    response.json(true);
}