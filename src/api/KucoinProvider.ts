import {ApiClient} from "./clients";
import {ApiKucoinResult} from "./types";

export class KucoinProvider {
    constructor (
        private readonly apiClient: ApiClient
    ) {}

    getKucoinResult(symbol: string): Promise<ApiKucoinResult> {
        return this.apiClient.get("", {symbol});
    }
}