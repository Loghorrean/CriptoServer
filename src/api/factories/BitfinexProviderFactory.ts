import {ApiClientFactory, ApiClientFactoryInterface} from "./clients";
import {Headers} from "../types";
import {BitfinexProvider} from "../BitfinexProvider";

export class BitfinexProviderFactory {
    private readonly apiClientFactory: ApiClientFactoryInterface;

    constructor(baseUrl: string, headers: Headers) {
        this.apiClientFactory = new ApiClientFactory(
            `${baseUrl}/v2/ticker`,
            headers
        );
    }

    public createBitfinexProvider(): BitfinexProvider {
        return new BitfinexProvider(this.apiClientFactory.createApiClient());
    }
}