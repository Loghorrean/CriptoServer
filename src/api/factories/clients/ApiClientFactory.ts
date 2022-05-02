import {Headers} from "../../types";
import {ApiClient} from "../../clients";
import {ApiClientFactoryInterface} from "./ApiClientFactoryInterface";

export class ApiClientFactory implements ApiClientFactoryInterface{
    constructor(
        private readonly baseUrl: string,
        private readonly headers: Headers = {},
    ) {}

    createApiClient(): ApiClient {
        return new ApiClient(this.baseUrl, this.headers);
    }

    createAuthorizedApiClient(authToken: string) {
        return new ApiClient(this.baseUrl, this.headers, authToken);
    }
}