import {ApiClientFactory} from "./clients/ApiClientFactory";
import {Headers} from "../types";
import {HuobiProvider} from "../HuobiProvider";
import {ApiClientFactoryInterface, RacingApiClientFactory} from "./clients";

export class HuobiProviderFactory {
    private apiClientFactory: ApiClientFactoryInterface;

    constructor(baseUrl: string, headers: Headers = {}) {
        this.apiClientFactory = new ApiClientFactory(
            `${baseUrl}/market/trade`,
            headers
        );
        this.apiClientFactory = new RacingApiClientFactory(this.apiClientFactory);
    }

    createHuobiProvider(): HuobiProvider {
        return new HuobiProvider(
            this.apiClientFactory.createApiClient()
        );
    }
}