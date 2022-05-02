import {IApiResponse} from "./IApiResponse";

export interface ApiBinanceResult extends IApiResponse {
    price: number
    exchange: "binance"
}