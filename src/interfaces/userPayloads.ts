export interface ProfileInformation {
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    isManager: boolean
}

export interface ManagerInformation {
    assignedEmployees: Employee[],
    availableEmployees: Employee[]
}

interface Employee {
    firstName: string, 
    lastName: string,
    userId: number
}