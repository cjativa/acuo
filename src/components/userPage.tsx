import * as React from 'react';

import { Profile } from './profile';
import { UserSerivce } from '../services/userService';

export class UserPage extends React.Component {

    us: UserSerivce;

    constructor(props) {
        super(props);

        this.us = new UserSerivce();

        this.fetchInformation();
    }

    fetchInformation = () => {
        this.us.getProfileInformation();
    }

    render() {
        return '';
    }
}