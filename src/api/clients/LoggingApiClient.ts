import {ApiClientDecorator} from "./ApiClientDecorator";
import {ApiClientInterface} from "./ApiClientInterface";

export class LoggingApiClient extends ApiClientDecorator {
    constructor(apiClient: ApiClientInterface) {
        super(apiClient);
    }

    async get(endpoint: string, params?: object): Promise<any> {
        console.log("LOGGING");
        return super.get(endpoint, params);
    }
}