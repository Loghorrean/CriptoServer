import {ApiClientInterface} from "./clients";
import {ApiKucoinResult} from "./types";

export class KucoinProvider {
    constructor (
        private readonly apiClient: ApiClientInterface
    ) {}

    getKucoinResult(symbol: string): Promise<ApiKucoinResult> {
        return this.apiClient.get("/market/orderbook/level1", {symbol}).catch(() => {
            return new Promise<void>((res) => {
                res();
            });
        });
    }
}