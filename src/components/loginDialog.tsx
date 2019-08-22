import * as React from 'react';

export class LoginDialog extends React.Component {

    

    render() {
        return (
            <div>
                <form>
                    <div className="form-field">
                        <label>Username or Email</label>
                        <input type="text" />
                    </div>
                    <div className="form-field">
                        <label>Password</label>
                        <input type="password" />
                    </div>
                </form>
            </div>
        )
    }
}