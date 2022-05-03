import {ApiClientInterface} from "./clients";
import {ApiKrakenResult} from "./types";

export class KrakenProvider {
    constructor(private readonly apiClient: ApiClientInterface)
    {}

    public getKrakenResult(pair: string): Promise<ApiKrakenResult> {
        return this.apiClient.get("", {pair}).catch(() => {
            return new Promise<void>((res) => {
                res();
            });
        });
    }
}