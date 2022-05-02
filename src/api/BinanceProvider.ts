import {ApiClientInterface} from "./clients";
import {ApiBinanceResult} from "./types";

export class BinanceProvider {
    constructor(private readonly client: ApiClientInterface)
    {}

    public getBinanceResult(symbol: string): Promise<ApiBinanceResult> {
        return this.client.get("", {symbol});
    }
}