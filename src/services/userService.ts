import axios, { Method } from 'axios';

import { RequestConfig } from '../classes/axiosConfigs';

export class UserSerivce {


    getProfileInformation() {
        this.executeRequest('get', '/api/user');
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
            const response = (await axios(config)).data;
            console.log(response);
            return response;
        }

        catch (error) {
            console.log()
        }
    }
}