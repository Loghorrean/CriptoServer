import {ApiClientFactoryDecorator} from "./ApiClientFactoryDecorator";
import {ApiClientFactoryInterface} from "./ApiClientFactoryInterface";
import {RacingApiClient} from "../../clients";

export class RacingApiClientFactory extends ApiClientFactoryDecorator {
    constructor(apiClientFactory: ApiClientFactoryInterface) {
        super(apiClientFactory);
    }

    createApiClient(): RacingApiClient {
        return new RacingApiClient(super.createApiClient());
    }

    createAuthorizedApiClient(authToken: string): RacingApiClient {
        return new RacingApiClient(super.createAuthorizedApiClient(authToken));
    }
}