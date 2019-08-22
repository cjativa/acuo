import * as React from 'react';
import Modal from 'react-modal';



Modal.setAppElement('#root')

interface State {
    isOpen: boolean
}

interface Props {
    dialog: any,
    closeDialog: () => void
}

export class AuthenticationDialog extends React.Component<Props, State> {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: true
        }
    }

    onRequestClose = () => {
        this.props.closeDialog();
    }
    

    render() {

        const { isOpen } = this.state;
        const { onRequestClose } = this;
        const { dialog: Dialog } = this.props;

        return (
            <Modal isOpen={isOpen} onRequestClose={onRequestClose}><Dialog /></Modal>
        )
    }
}