import * as results from "../types";

export interface ApiDataResponse {
    readonly binance: results.ApiBinanceResult | void
    readonly kraken: results.ApiKrakenResult | void
    readonly ftx: results.ApiFtxResult | void
    readonly coinbase: results.ApiCoinbaseResult | void
    readonly kucoin: results.ApiKucoinResult | void
    readonly huobi: results.ApiHuobiResult | void
    readonly bitfinex: results.ApiBitfinexResult | void
    readonly gemini: results.ApiGeminiResult | void
}