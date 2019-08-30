import * as React from 'react';

import { AuthenticationDialog } from './authenticationDialog';
import { LoginDialog } from './loginDialog';
import { SignUpDialog } from './signUpDialog';

interface State {
    displayDialog: boolean,
    dialog: any
}

export class NavigationBar extends React.Component<any, State> {

    constructor(props) {
        super(props);

        this.state = {
            displayDialog: null,
            dialog: null
        }
    }

    displayDialogType = (dialog: any) => {
        this.setState({ dialog, displayDialog: true });
    }

    closeDialog = () => {
        this.setState({ displayDialog: false });
    }

    render() {

        const { displayDialogType, closeDialog } = this;
        const { displayDialog, dialog } = this.state;

        return (
            <>
                <nav className="navigation-bar">
                    <div className="logo-box">
                        <span className="main">Acuo</span>
                        <span className="tagline">transforming employee appraisal</span>
                    </div>
                    <div className="button-box">
                        <button className="login" onClick={() => { displayDialogType(LoginDialog) }}>Login</button>
                        <button className="sign-up" onClick={() => { displayDialogType(SignUpDialog) }}>Sign Up</button>
                    </div>

                </nav>

                {displayDialog && <AuthenticationDialog dialog={dialog} closeDialog={closeDialog} />}
            </>
        )
    }
}