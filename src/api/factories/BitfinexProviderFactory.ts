import {ApiClientFactory, ApiClientFactoryInterface, RacingApiClientFactory} from "./clients";
import {Headers} from "../types";
import {BitfinexProvider} from "../BitfinexProvider";

export class BitfinexProviderFactory {
    private readonly apiClientFactory: ApiClientFactoryInterface;

    constructor(baseUrl: string, headers: Headers) {
        this.apiClientFactory = new ApiClientFactory(
            `${baseUrl}/v2/ticker`,
            headers
        );
        this.apiClientFactory = new RacingApiClientFactory(this.apiClientFactory);
    }

    public createBitfinexProvider(): BitfinexProvider {
        return new BitfinexProvider(this.apiClientFactory.createApiClient());
    }
}