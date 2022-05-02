import {ApiHuobiResult} from "./types";
import {ApiClient} from "./clients";

export class HuobiProvider {
    constructor (
        private readonly apiClient: ApiClient
    ) {}

    getHuobiResult(symbol: string): Promise<ApiHuobiResult> {
        return this.apiClient.get("", {symbol: symbol});
    }
}