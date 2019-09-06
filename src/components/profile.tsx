import * as React from 'react';
import { ProfileInformation } from '../interfaces/userPayloads';

interface Props {
    profileInformation: ProfileInformation
}

interface State {
    firstName: string,
    lastName: string,
    username: string,
    email: string
}

export class Profile extends React.Component<Props, State> {

    constructor(props) {
        super(props);

        const { firstName, lastName, username, email } = this.props.profileInformation;

        this.state = {
            firstName,
            lastName,
            username,
            email
        }
    }

    onTextInputChange = (event, stateField: string) => {
        const { value } = event.target;

        this.setState((previousState) => {
            return {
                ...previousState,
                [stateField]: value
            }
        });
    }

    render() {

        const { firstName, lastName, username, email } = this.state;
        const { onTextInputChange } = this;

        return (
            <div className="profile">
                <form>
                    <div className="form-field">
                        <label>First Name</label>
                        <input type="text" value={firstName} onChange={(event) => { onTextInputChange(event, 'firstName') }}></input>
                    </div>
                    <div className="form-field">
                        <label>Last Name</label>
                        <input type="text" value={lastName} onChange={(event) => { onTextInputChange(event, 'lastName') }}></input>
                    </div>
                    <div className="form-field">
                        <label>Username</label>
                        <input type="text" value={username} onChange={(event) => { onTextInputChange(event, 'username') }}></input>
                    </div>
                    <div className="form-field">
                        <label>Email</label>
                        <input type="text" value={email} onChange={(event) => { onTextInputChange(event, 'email') }}></input>
                    </div>
                </form>
            </div>
        )
    }
}