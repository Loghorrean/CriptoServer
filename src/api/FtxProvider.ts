import {ApiClient} from "./clients";
import {ApiFtxResult} from "./types";

export class FtxProvider {
    constructor(private readonly apiClient: ApiClient)
    {}

    public getFtxResult(endpoint: string): Promise<ApiFtxResult> {
        return this.apiClient.get(endpoint);
    }
}