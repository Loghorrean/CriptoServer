import {Money} from "../types";

export interface DataResponse {
    readonly kraken: Money
    readonly ftx: Money
    readonly binance: Money
    readonly coinbase: Money
    readonly kucoin: Money
    readonly huobi: Money
    readonly bitfinex: Money
    readonly gemini: Money
}