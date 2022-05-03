import axios, {AxiosInstance, AxiosRequestConfig} from "axios";
import {Headers} from "../types";
import {ApiClientInterface} from "./ApiClientInterface";

export class ApiClient implements ApiClientInterface {
    constructor(
        private readonly baseUrl: string,
        private readonly headers: Headers = {},
        private readonly authToken: string = "",
    )
    {}

    async get(endpoint: string = "", params?: object): Promise<any> {
        try {
            const client = this.createClient(params);
            const response = await client.get(endpoint);
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    async post(params: object, data?: any): Promise<any> {
        const client = this.createClient(params);
        const response = await client.post("", data);
        return response.data;
    }

    private createClient(params: object = {}): AxiosInstance {
        const config: AxiosRequestConfig = {
            baseURL: this.baseUrl,
            headers: this.headers,
            params: params
        };
        if (this.authToken) {
            config.headers!.Authorization = `Bearer ${this.authToken}`;
        }
        return axios.create(config);
    }

    private handleError(error) {
        console.log(error);
        throw error;
    }
}