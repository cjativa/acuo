import * as React from 'react';

import { AuthenticationDialog } from './authenticationDialog';
import { LoginDialog } from './loginDialog';
import { SignUpDialog } from './signUpDialog';
import { throwStatement } from '@babel/types';

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
                <nav>
                    <span>Acuo</span>
                    <button onClick={() => {displayDialogType(LoginDialog)}}>Login</button>
                    <button onClick={() => {displayDialogType(SignUpDialog)}}>Sign Up</button>
                </nav>

                {displayDialog && <AuthenticationDialog dialog={dialog} closeDialog={closeDialog} />}
            </>
        )
    }
}