import { Config } from '../utils/config';
import { AxiosRequestConfig, Method } from 'axios';

export class SurveyMonkeyConfig implements AxiosRequestConfig {

    headers: {};
    method: Method;
    baseURL: string;
    url: string;

    constructor(method: Method, url: string) {
        this.method = method;
        this.url = url;

        this.baseURL = Config.surveyMonkeyUrl;
        this.headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${Config.surveyMonkeyAccessToken}`
        }
    }
}