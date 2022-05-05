import {ApiClientInterface} from "./clients";
import {ApiKrakenResult} from "./types";

export class KrakenProvider {
    constructor(private readonly apiClient: ApiClientInterface)
    {}

    public getKrakenResult(pair: string): Promise<ApiKrakenResult> {
        return this.apiClient.get("/0/public/Ticker", {pair}).catch(() => {
            return new Promise<void>((res) => {
                res();
            });
        });
    }
}