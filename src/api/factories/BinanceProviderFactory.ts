import {ApiClientFactory} from "./clients";
import {BinanceProvider} from "../BinanceProvider";
import {Headers} from "../types";
import {ApiClientFactoryInterface, LoggingApiClientFactory} from "./clients";
import {RacingApiClientFactory} from "./clients/RacingApiClientFactory";

export class BinanceProviderFactory {
    private apiClientFactory: ApiClientFactoryInterface

    constructor(baseUrl: string, headers: Headers = {}) {
        this.apiClientFactory = new ApiClientFactory(
            `${baseUrl}/api/v3/ticker/price`,
            headers
        )
    }

    public createBinanceProvider(): BinanceProvider {
        return new BinanceProvider(
            this.apiClientFactory.createApiClient()
        );
    }
}