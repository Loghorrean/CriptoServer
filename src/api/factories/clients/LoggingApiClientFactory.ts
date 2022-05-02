import {ApiClientFactoryInterface} from "./ApiClientFactoryInterface";
import {ApiClientFactoryDecorator} from "./ApiClientFactoryDecorator";
import {LoggingApiClient} from "../../clients";

export class LoggingApiClientFactory extends ApiClientFactoryDecorator {
    constructor(apiClientFactory: ApiClientFactoryInterface) {
        super(apiClientFactory);
    }

    createApiClient(): LoggingApiClient {
        return new LoggingApiClient(super.createApiClient());
    }

    createAuthorizedApiClient(authToken: string): LoggingApiClient {
        return new LoggingApiClient(super.createAuthorizedApiClient(authToken));
    }
}