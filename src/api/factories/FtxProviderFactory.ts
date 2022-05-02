import {Headers} from "../types";
import {ApiClientFactory} from "./clients/ApiClientFactory";
import {FtxProvider} from "../FtxProvider";

export class FtxProviderFactory {
    private apiClientFactory: ApiClientFactory

    constructor(baseUrl: string, headers: Headers) {
        this.apiClientFactory = new ApiClientFactory(
            `${baseUrl}/api/markets/`,
            headers
        );
    }

    public createFtxProvider(): FtxProvider {
        return new FtxProvider(
            this.apiClientFactory.createApiClient()
        );
    }
}