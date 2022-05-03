import {ApiClientInterface} from "./clients";
import {ApiFtxResult} from "./types";

export class FtxProvider {
    constructor(private readonly apiClient: ApiClientInterface)
    {}

    public getFtxResult(endpoint: string): Promise<ApiFtxResult> {
        return this.apiClient.get(endpoint).catch(() => {
            return new Promise<void>((res) => {
                res();
            });
        });
    }
}