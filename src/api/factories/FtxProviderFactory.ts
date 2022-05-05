import {Headers} from "../types";
import {ApiClientFactory, RacingApiClientFactory} from "./clients";
import {FtxProvider} from "../FtxProvider";
import {ApiClientFactoryInterface} from "./clients";

export class FtxProviderFactory {
    private apiClientFactory: ApiClientFactoryInterface

    constructor(baseUrl: string, headers: Headers) {
        this.apiClientFactory = new ApiClientFactory(
            `${baseUrl}/api`,
            headers
        );
        this.apiClientFactory = new RacingApiClientFactory(this.apiClientFactory);
    }

    public createFtxProvider(): FtxProvider {
        return new FtxProvider(
            this.apiClientFactory.createApiClient()
        );
    }
}