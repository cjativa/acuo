import * as React from 'react';

import { Profile } from './profile';
import { Manager } from './manager';
import { UserSerivce } from '../services/userService';
import { ProfileInformation, ManagerInformation } from '../interfaces/userPayloads';

interface State {
    profileInformation: ProfileInformation,
    managerInformation: ManagerInformation
}

export class UserPage extends React.Component<any, State> {

    us: UserSerivce;

    constructor(props) {
        super(props);

        this.state = {
            profileInformation: null,
            managerInformation: null,
        }

        this.us = new UserSerivce();
        this.fetchInformation();
    }

    fetchInformation = async () => {
        let profileInformation = await this.us.getProfileInformation();
        let managerInformation = null;;

        if (profileInformation.isManager) { managerInformation = await this.us.getManagerInformation(); }

        this.setState({ profileInformation, managerInformation });
    }

    render() {

        const { profileInformation, managerInformation } = this.state;

        return (
            <>
                {profileInformation && <Profile profileInformation={profileInformation} />}
                {managerInformation && <Manager managerInformation={managerInformation} />}
            </>

        )
    }
}