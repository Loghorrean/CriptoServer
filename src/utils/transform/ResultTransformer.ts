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
        const money = parseFloat(apiKrakenResult.result.XXBTZUSD.a[0]);
        return {
            sell: parseFloat(money.toFixed(2))
        }
    }

    private transformFtxResult(apiFtxResult: ApiFtxResult): Money {
        return {
            sell: parseFloat(apiFtxResult.result.price.toFixed(2))
        }
    }

    private transformCoinbaseResult(apiCoinbaseResult: ApiCoinbaseResult): Money {
        return {
            sell: parseFloat(parseFloat(apiCoinbaseResult.data.amount).toFixed(2))
        }
    }

    private transformKucoinResult(apiKucoinResult: ApiKucoinResult): Money {
        return {
            sell: parseFloat(parseFloat(apiKucoinResult.data.price).toFixed(2))
        }
    }

    private transformBinanceResult(apiBinanceResult: ApiBinanceResult): Money {
        return {
            sell: parseFloat(parseFloat(apiBinanceResult.price).toFixed(2))
        }
    }

    private transformHuobiResult(apiHuobiResult: ApiHuobiResult): Money {
        return {
            sell: parseFloat(apiHuobiResult.tick.data["0"].price.toFixed(2))
        }
    }

    private transformBitfinexResult(apiResult: ApiBitfinexResult): Money {
        const money = apiResult[2] as number;
        return {
            sell: parseFloat(money.toFixed(2)) // This is such a piece of shit api
        }
    }

    private transformGeminiResult(apiResult: ApiGeminiResult): Money {
        return {
            sell: parseFloat(parseFloat(apiResult.bid).toFixed(2))
        }
    }
}