import {Headers} from "../types";
import {ApiClientFactory} from "./clients/ApiClientFactory";
import {CoinbaseProvider} from "../CoinbaseProvider";

export class CoinbaseProviderFactory {
    private apiClientFactory: ApiClientFactory;

    constructor(baseUrl: string, headers: Headers = {}) {
        this.apiClientFactory = new ApiClientFactory(
            `${baseUrl}/v2/prices/`,
            headers
        );
    }

    createCoinbaseProvider(): CoinbaseProvider {
        return new CoinbaseProvider(
            this.apiClientFactory.createApiClient()
        );
    }
}