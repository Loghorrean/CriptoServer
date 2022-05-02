import {ApiClientInterface} from "./clients";
import {ApiBitfinexResult} from "./types/api/ApiBitfinexResult";

export class BitfinexProvider {
    constructor(private readonly apiClient: ApiClientInterface) {
    }

    public getBitfinexResult(symbol: string): Promise<ApiBitfinexResult> {
        return this.apiClient.get(`/${symbol}`);
    }
}