import * as React from 'react';

import { AuthenticationService } from '../services/authenticationService';

interface State {
    email: string,
    username: string,
    password: string
}

export class SignUpDialog extends React.Component<any, State> {

    as: AuthenticationService;

    constructor(props) {
        super(props);

        this.as = new AuthenticationService();

        this.state = {
            email: '',
            username: '',
            password: ''
        }
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

    signUp = (event) => {
        event.preventDefault();

        const { email, username, password } = this.state;
        this.as.signUp(email, username, password);
    }

    render() {

        const { email, username, password } = this.state;
        const { emailChange, usernameChange, passwordChange, signUp } = this;

        return (
            <div>
                <form>
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
                        <button onClick={signUp}>Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}