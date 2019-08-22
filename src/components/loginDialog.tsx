import * as React from 'react';

import { AuthenticationService } from '../services/authenticationService';

interface State {
    identifier: string,
    password: string
}

export class LoginDialog extends React.Component<any, State> {

    as: AuthenticationService;

    constructor(props) {
        super(props);

        this.as = new AuthenticationService();

        this.state = {
            identifier: '',
            password: ''
        }
    }

    identifierChange = (event) => {
        this.setState({ identifier: event.target.value });
    }

    passwordChange = (event) => {
        this.setState({ password: event.target.value });
    }

    login = (event) => {
        event.preventDefault();

        const { identifier, password } = this.state;
        this.as.login(identifier, password);
    }

    render() {

        const { identifier, password } = this.state;
        const { identifierChange, passwordChange, login } = this;

        return (
            <div>
                <form>
                    <div className="form-field">
                        <label>Username or Email</label>
                        <input type="text" value={identifier} onChange={identifierChange} />
                    </div>
                    <div className="form-field">
                        <label>Password</label>
                        <input type="password" value={password} onChange={passwordChange} />
                    </div>
                    <div className="form-field">
                        <button onClick={login}>Login</button>
                    </div>
                </form>
            </div>
        )
    }
}