import {Headers} from "../types";
import {ApiClientFactory, RacingApiClientFactory} from "./clients";
import {KucoinProvider} from "../KucoinProvider";
import {ApiClientFactoryInterface} from "./clients";

export class KucoinProviderFactory {
    private readonly apiClientFactory: ApiClientFactoryInterface;

    constructor(baseUrl: string, headers: Headers = {}) {
        this.apiClientFactory = new ApiClientFactory(
            `${baseUrl}/api/v1`,
            headers
        );
        this.apiClientFactory = new RacingApiClientFactory(this.apiClientFactory);
    }

    createKucoinProvider(): KucoinProvider {
        return new KucoinProvider(
            this.apiClientFactory.createApiClient()
        );
    }
}