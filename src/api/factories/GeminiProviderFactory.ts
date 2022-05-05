import {Headers} from "../types";
import {ApiClientFactory, ApiClientFactoryInterface, RacingApiClientFactory} from "./clients";
import {GeminiProvider} from "../GeminiProvider";

export class GeminiProviderFactory {
    private readonly apiClientFactory: ApiClientFactoryInterface;

    constructor(baseUrl: string, headers: Headers) {
        this.apiClientFactory = new ApiClientFactory(
            `${baseUrl}/v2`,
            headers
        );
        this.apiClientFactory = new RacingApiClientFactory(this.apiClientFactory);
    }

    public createGeminiProvider(): GeminiProvider {
        return new GeminiProvider(this.apiClientFactory.createApiClient());
    }
}