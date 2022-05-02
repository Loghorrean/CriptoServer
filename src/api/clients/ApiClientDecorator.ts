import {ApiClientInterface} from "./ApiClientInterface";

export abstract class ApiClientDecorator implements ApiClientInterface {
    protected constructor(protected readonly apiClient: ApiClientInterface) {
    }

    get(endpoint: string, params?: object): Promise<any> {
        return this.apiClient.get(endpoint, params);
    }
}