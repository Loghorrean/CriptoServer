import * as results from "../types";

export interface ApiDataResponse {
    readonly binance: results.ApiBinanceResult
    readonly kraken: results.ApiKrakenResult
    readonly ftx: results.ApiFtxResult
    readonly coinbase: results.ApiCoinbaseResult
    readonly kucoin: results.ApiKucoinResult
    readonly huobi: results.ApiHuobiResult
    readonly bitfinex: results.ApiBitfinexResult
    readonly gemini: results.ApiGeminiResult
}