import {ApiHuobiResult} from "./types";
import {ApiClient, ApiClientInterface} from "./clients";

export class HuobiProvider {
    constructor (
        private readonly apiClient: ApiClientInterface
    ) {}

    getHuobiResult(symbol: string): Promise<ApiHuobiResult> {
        return this.apiClient.get("/market/trade", {symbol: symbol}).catch(() => {
            return new Promise<void>((res) => {
                res();
            });
        });
    }
}