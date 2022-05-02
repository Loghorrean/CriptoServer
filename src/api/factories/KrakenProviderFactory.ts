import {ApiClientFactory} from "./clients/ApiClientFactory";
import {Headers} from "../types";
import {KrakenProvider} from "../KrakenProvider";

export class KrakenProviderFactory {
    private apiClientFactory: ApiClientFactory

    constructor(baseUrl: string, headers: Headers) {
        this.apiClientFactory = new ApiClientFactory(
            `${baseUrl}/0/public/Ticker`,
            headers
        )
    }

    public createKrakenProvider(): KrakenProvider {
        return new KrakenProvider(
            this.apiClientFactory.createApiClient()
        );
    }
}