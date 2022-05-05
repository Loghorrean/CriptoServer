import {ApiClientFactory, RacingApiClientFactory} from "./clients";
import {Headers} from "../types";
import {KrakenProvider} from "../KrakenProvider";
import {ApiClientFactoryInterface} from "./clients";

export class KrakenProviderFactory {
    private readonly apiClientFactory: ApiClientFactoryInterface

    constructor(baseUrl: string, headers: Headers) {
        this.apiClientFactory = new ApiClientFactory(
            `${baseUrl}`,
            headers
        );
        this.apiClientFactory = new RacingApiClientFactory(this.apiClientFactory);
    }

    public createKrakenProvider(): KrakenProvider {
        return new KrakenProvider(
            this.apiClientFactory.createApiClient()
        );
    }
}