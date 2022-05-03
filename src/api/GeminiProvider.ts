import {ApiClientInterface} from "./clients";
import {ApiGeminiResult} from "./types";

export class GeminiProvider {
    constructor(private readonly apiClient: ApiClientInterface) {
    }

    public getGeminiResult(symbol: string): Promise<ApiGeminiResult> {
        return this.apiClient.get(`/${symbol}`).catch(() => {
            return new Promise<void>((res) => {
                res();
            });
        });
    }
}