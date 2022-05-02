import {ApiClientFactory} from "./clients/ApiClientFactory";
import {Headers} from "../types";
import {HuobiProvider} from "../HuobiProvider";

export class HuobiProviderFactory {
    private apiClientFactory: ApiClientFactory;

    constructor(baseUrl: string, headers: Headers = {}) {
        this.apiClientFactory = new ApiClientFactory(
            `${baseUrl}/market/trade`,
            headers
        );
    }

    createHuobiProvider(): HuobiProvider {
        return new HuobiProvider(
            this.apiClientFactory.createApiClient()
        );
    }
}