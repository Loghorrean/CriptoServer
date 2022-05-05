import {Headers} from "../types";
import {ApiClientFactory} from "./clients";
import {CoinbaseProvider} from "../CoinbaseProvider";
import {ApiClientFactoryInterface, RacingApiClientFactory} from "./clients";

export class CoinbaseProviderFactory {
    private apiClientFactory: ApiClientFactoryInterface;

    constructor(baseUrl: string, headers: Headers = {}) {
        this.apiClientFactory = new ApiClientFactory(
            `${baseUrl}/v2`,
            headers
        );
        this.apiClientFactory = new RacingApiClientFactory(this.apiClientFactory);
    }

    createCoinbaseProvider(): CoinbaseProvider {
        return new CoinbaseProvider(
            this.apiClientFactory.createApiClient()
        );
    }
}