import {IApiResponse} from "./IApiResponse";

export interface ApiBinanceResult extends IApiResponse {
    price: string
    exchange: "binance"
}