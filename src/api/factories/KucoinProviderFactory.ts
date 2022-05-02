import {Headers} from "../types";
import {ApiClientFactory} from "./clients/ApiClientFactory";
import {KucoinProvider} from "../KucoinProvider";

export class KucoinProviderFactory {
    private apiClientFactory: ApiClientFactory;

    constructor(baseUrl: string, headers: Headers = {}) {
        this.apiClientFactory = new ApiClientFactory(
            `${baseUrl}/api/v1/market/orderbook/level1`,
            headers
        );
    }

    createKucoinProvider(): KucoinProvider {
        return new KucoinProvider(
            this.apiClientFactory.createApiClient()
        );
    }
}