import {ApiClient} from "./clients";
import {ApiKrakenResult} from "./types";

export class KrakenProvider {
    constructor(private readonly apiClient: ApiClient)
    {}

    public getKrakenResult(pair: string): Promise<ApiKrakenResult> {
        return this.apiClient.get("", {pair});
    }
}