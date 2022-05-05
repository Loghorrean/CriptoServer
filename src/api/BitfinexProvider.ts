import {ApiClientInterface} from "./clients";
import {ApiBitfinexResult} from "./types";

export class BitfinexProvider {
    constructor(private readonly apiClient: ApiClientInterface) {
    }

    public getBitfinexResult(symbol: string): Promise<ApiBitfinexResult | void> {
        return this.apiClient.get(`/ticker/${symbol}`).catch(() => {
            return new Promise<void>((res) => {
                res();
            });
        });
    }
}