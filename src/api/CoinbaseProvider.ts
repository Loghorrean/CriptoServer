import {ApiClient, ApiClientInterface} from "./clients";
import {ApiCoinbaseResult} from "./types";

export class CoinbaseProvider {
    constructor (
        private readonly apiClient: ApiClientInterface
    ) {}

    getCoinbaseSellResult(currency: string): Promise<ApiCoinbaseResult> {
        return this.apiClient.get(`prices/${currency}/sell`, {currency: "USD"}).catch(() => {
            return new Promise<void>((res) => {
                res();
            });
        });
    }
}