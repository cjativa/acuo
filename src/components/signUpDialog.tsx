import * as React from 'react';

import { AuthenticationService } from '../services/authenticationService';

interface State {
    email: string,
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    managerChecked: boolean
}

export class SignUpDialog extends React.Component<any, State> {

    as: AuthenticationService;

    constructor(props) {
        super(props);

        this.as = new AuthenticationService();

        this.state = {
            email: '',
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            managerChecked: false
        }
    }

    firstNameChange = (event) => {
        this.setState({ firstName: event.target.value });
    }

    lastNameChange = (event) => {
        this.setState({ lastName: event.target.value });
    }

    emailChange = (event) => {
        this.setState({ email: event.target.value });
    }

    usernameChange = (event) => {
        this.setState({ username: event.target.value });
    }

    passwordChange = (event) => {
        this.setState({ password: event.target.value });
    }

    managerChange = (event) => {
        this.setState(previousState => ({
            managerChecked: !previousState.managerChecked
        }));
    }

    signUp = async (event) => {
        event.preventDefault();

        const { firstName, lastName, email, username, password, managerChecked } = this.state;
        await this.as.signUp(firstName, lastName, email, username, password, managerChecked);
    }

    render() {

        const { email, username, password, firstName, lastName, managerChecked } = this.state;
        const { firstNameChange, lastNameChange, emailChange, usernameChange, passwordChange, signUp, managerChange } = this;

        return (
            <div>
                <form>
                    <div className="form-field name">
                        <label>First Name</label>
                        <input type="text" value={firstName} onChange={firstNameChange} />
                        <label>Last Name</label>
                        <input type="text" value={lastName} onChange={lastNameChange} />
                    </div>
                    <div className="form-field">
                        <label>Email</label>
                        <input type="email" value={email} onChange={emailChange} />
                    </div>
                    <div className="form-field">
                        <label>Username</label>
                        <input type="text" value={username} onChange={usernameChange} />
                    </div>
                    <div className="form-field">
                        <label>Password</label>
                        <input type="password" value={password} onChange={passwordChange} />
                    </div>
                    <div className="form-field">
                        <label>I am a manager</label>
                        <input type="checkbox" onChange={managerChange} checked={managerChecked} />
                    </div>
                    <div className="form-field">
                        <button onClick={signUp}>Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}