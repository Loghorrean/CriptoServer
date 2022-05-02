import {
    ApiBinanceResult, ApiBitfinexResult,
    ApiDataResponse,
    ApiFtxResult, ApiGeminiResult,
    ApiHuobiResult,
    ApiKrakenResult,
    ApiKucoinResult, Money
} from "../../api";
import {DataResponse} from "../../api/models/DataResponse";
import {ApiCoinbaseResult} from "../../api";

export class ResultTransformer {
    public transformResult(apiDataResponse: ApiDataResponse): DataResponse {
        return {
            kraken: this.transformKrakenResult(apiDataResponse.kraken),
            ftx: this.transformFtxResult(apiDataResponse.ftx),
            binance: this.transformBinanceResult(apiDataResponse.binance),
            coinbase: this.transformCoinbaseResult(apiDataResponse.coinbase),
            kucoin: this.transformKucoinResult(apiDataResponse.kucoin),
            huobi: this.transformHuobiResult(apiDataResponse.huobi),
            bitfinex: this.transformBitfinexResult(apiDataResponse.bitfinex),
            gemini: this.transformGeminiResult(apiDataResponse.gemini)
        }
    }

    private transformKrakenResult(apiKrakenResult: ApiKrakenResult): Money {
        return {
            price: apiKrakenResult.result.XXBTZUSD.a[0]
        }
    }

    private transformFtxResult(apiFtxResult: ApiFtxResult): Money {
        return {
            price: apiFtxResult.result.price
        }
    }

    private transformCoinbaseResult(apiCoinbaseResult: ApiCoinbaseResult): Money {
        return {
            price: apiCoinbaseResult.data.amount,
        }
    }

    private transformKucoinResult(apiKucoinResult: ApiKucoinResult): Money {
        return {
            price: apiKucoinResult.data.price
        }
    }

    private transformBinanceResult(apiBinanceResult: ApiBinanceResult): Money {
        return {
            price: apiBinanceResult.price
        }
    }

    private transformHuobiResult(apiHuobiResult: ApiHuobiResult): Money {
        return {
            price: apiHuobiResult.tick.data["0"].price
        }
    }

    private transformBitfinexResult(apiResult: ApiBitfinexResult): Money {
        return {
            price: apiResult[2] // This is such a piece of shit api
        }
    }

    private transformGeminiResult(apiResult: ApiGeminiResult): Money {
        return {
            price: apiResult.bid
        }
    }
}