import {IApiResponse} from "./IApiResponse";

export interface ApiCoinbaseResult extends IApiResponse {
    data: {
        base: string
        currency: string
        amount: string
    }
    exchange: "coinbase"
}