import {ApiClient} from "./clients";
import {ApiCoinbaseResult} from "./types";

export class CoinbaseProvider {
    constructor (
        private readonly apiClient: ApiClient
    ) {}

    getCoinbaseSellResult(currency: string): Promise<ApiCoinbaseResult> {
        return this.apiClient.get(`${currency}/sell`, {currency: "USD"});
    }

    getCoinbaseBuyResult(currency: string): Promise<ApiCoinbaseResult> {
        return this.apiClient.get(`${currency}/buy`, {currency: "USD"});
    }
}