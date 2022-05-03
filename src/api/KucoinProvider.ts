import {ApiClientInterface} from "./clients";
import {ApiKucoinResult} from "./types";

export class KucoinProvider {
    constructor (
        private readonly apiClient: ApiClientInterface
    ) {}

    getKucoinResult(symbol: string): Promise<ApiKucoinResult> {
        return this.apiClient.get("", {symbol}).catch(() => {
            return new Promise<void>((res) => {
                res();
            });
        });
    }
}