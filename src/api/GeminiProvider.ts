import {ApiClientInterface} from "./clients";
import {ApiGeminiResult} from "./types";

export class GeminiProvider {
    constructor(private readonly apiClient: ApiClientInterface) {
    }

    public getGeminiResult(symbol: string): Promise<ApiGeminiResult> {
        return this.apiClient.get(`/ticker/${symbol}`).catch(() => {
            return new Promise<void>((res) => {
                res();
            });
        });
    }
}