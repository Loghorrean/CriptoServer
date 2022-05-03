import {ApiClientInterface} from "./clients";
import {ApiBinanceResult} from "./types";

export class BinanceProvider {
    constructor(private readonly client: ApiClientInterface)
    {}

    public async getBinanceResult(symbol: string): Promise<ApiBinanceResult|void> {
        return this.client.get("", {symbol}).catch(() => {
            return new Promise<void>((res) => {
                res()
            });
        });
    }
}