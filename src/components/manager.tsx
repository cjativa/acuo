import * as React from 'react';
import { ManagerInformation } from '../interfaces/userPayloads';

interface Props {
    managerInformation: ManagerInformation
}

export class Manager extends React.Component<Props> {

    constructor(props) {
        super(props);


    }

    render() {

        const { availableEmployees, assignedEmployees } = this.props.managerInformation;

        return (
            <div className="manager">
                <div className="employee-selection">
                    <div className="select-field">
                        <label>Employees available to be added under you</label>
                        <select multiple size={availableEmployees.length}>
                            {availableEmployees.map((employee, index) => {
                                return (<option key={index}>{`${employee.firstName} ${employee.lastName}`}</option>)
                            })}
                        </select>
                    </div>

                    <div className="modify-selection">
                        <button>&#8249;</button>
                        <button>&#8250;</button>
                    </div>

                    <div className="select-field">
                        <label>Employees already under you</label>
                        <select multiple size={assignedEmployees.length}>
                            {assignedEmployees.map((employee, index) => {
                                return (<option key={index}>{`${employee.firstName} ${employee.lastName}`}</option>)
                            })}
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}