import { AxiosRequestConfig, Method } from "axios";



export class RequestConfig implements AxiosRequestConfig {

    url: string;
    // baseURL: string;
    method: Method;
    data: any;

    constructor(url: string, method: Method, data?: any) {

        this.url = url;
        this.method = method;
        
        if (data !== undefined) {
            this.data = data;
        }
    }
}