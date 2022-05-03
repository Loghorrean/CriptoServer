import {ApiClientFactory} from "./clients";
import {BinanceProvider} from "../BinanceProvider";
import {Headers} from "../types";
import {ApiClientFactoryInterface, RacingApiClientFactory} from "./clients";

export class BinanceProviderFactory {
    private readonly apiClientFactory: ApiClientFactoryInterface

    constructor(baseUrl: string, headers: Headers = {}) {
        this.apiClientFactory = new ApiClientFactory(
            `${baseUrl}/api/v3/ticker/price`,
            headers
        )
        this.apiClientFactory = new RacingApiClientFactory(this.apiClientFactory);
    }

    public createBinanceProvider(): BinanceProvider {
        return new BinanceProvider(
            this.apiClientFactory.createApiClient()
        );
    }
}