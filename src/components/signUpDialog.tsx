import * as React from 'react';

export class SignUpDialog extends React.Component {



    render() {
        return (
            <div>
                <form>
                    <div className="form-field">
                        <label>Email</label>
                        <input type="email" />
                    </div>
                    <div className="form-field">
                        <label>Username</label>
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