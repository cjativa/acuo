import axios, { Method } from 'axios';

import { RequestConfig } from '../classes/axiosConfigs';
import { ProfileInformation, ManagerInformation } from '../interfaces/userPayloads';

export class UserSerivce {


    async getProfileInformation() {
        return (await this.executeRequest('get', '/api/user')) as ProfileInformation;
    }

    async getManagerInformation() {
        return (await this.executeRequest('get', '/api/user/manager')) as ManagerInformation;
    }

    private async executeRequest(method: Method, url: string, data?: any) {

        let config;

        if (data !== undefined) {
            config = new RequestConfig(url, method, data);
        }

        else {
            config = new RequestConfig(url, method);
        }

        try {
            return (await axios(config)).data;
        }

        catch (error) {
            console.log(`An error occurred executing the request for ${url}`, error);
        }
    }
}