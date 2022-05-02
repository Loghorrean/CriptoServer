import {ApiClientFactoryInterface} from "./ApiClientFactoryInterface";
import {ApiClientInterface} from "../../clients";

export abstract class ApiClientFactoryDecorator implements ApiClientFactoryInterface{
    protected constructor(private readonly apiClientFactory: ApiClientFactoryInterface)
    {}

    createApiClient(): ApiClientInterface {
        return this.apiClientFactory.createApiClient();
    }

    createAuthorizedApiClient(authToken: string): ApiClientInterface {
        return this.apiClientFactory.createAuthorizedApiClient(authToken);
    }
}