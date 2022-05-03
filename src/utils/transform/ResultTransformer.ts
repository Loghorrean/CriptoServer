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
            kraken: ResultTransformer.transformKrakenResult(apiDataResponse.kraken),
            ftx: ResultTransformer.transformFtxResult(apiDataResponse.ftx),
            binance: ResultTransformer.transformBinanceResult(apiDataResponse.binance),
            coinbase: ResultTransformer.transformCoinbaseResult(apiDataResponse.coinbase),
            kucoin: ResultTransformer.transformKucoinResult(apiDataResponse.kucoin),
            huobi: ResultTransformer.transformHuobiResult(apiDataResponse.huobi),
            bitfinex: ResultTransformer.transformBitfinexResult(apiDataResponse.bitfinex),
            gemini: ResultTransformer.transformGeminiResult(apiDataResponse.gemini)
        }
    }

    private static transformKrakenResult(apiKrakenResult: ApiKrakenResult | void): Money {
        if (!apiKrakenResult) {
            return ResultTransformer.getErroredMoney();
        }
        const money = parseFloat(apiKrakenResult.result.XXBTZUSD.a[0]);
        return {
            sell: parseFloat(money.toFixed(2))
        }
    }

    private static transformFtxResult(apiFtxResult: ApiFtxResult | void): Money {
        if (!apiFtxResult) {
            return ResultTransformer.getErroredMoney();
        }
        return {
            sell: parseFloat(apiFtxResult.result.price.toFixed(2))
        }
    }

    private static transformCoinbaseResult(apiCoinbaseResult: ApiCoinbaseResult | void): Money {
        if (!apiCoinbaseResult) {
            return ResultTransformer.getErroredMoney();
        }
        return {
            sell: parseFloat(parseFloat(apiCoinbaseResult.data.amount).toFixed(2))
        }
    }

    private static transformKucoinResult(apiKucoinResult: ApiKucoinResult | void): Money {
        if (!apiKucoinResult) {
            return ResultTransformer.getErroredMoney();
        }
        return {
            sell: parseFloat(parseFloat(apiKucoinResult.data.price).toFixed(2))
        }
    }

    private static transformBinanceResult(apiBinanceResult: ApiBinanceResult | void): Money {
        if (!apiBinanceResult) {
            return ResultTransformer.getErroredMoney();
        }
        return {
            sell: parseFloat(parseFloat(apiBinanceResult.price).toFixed(2))
        }
    }

    private static transformHuobiResult(apiHuobiResult: ApiHuobiResult | void): Money {
        if (!apiHuobiResult) {
            return ResultTransformer.getErroredMoney();
        }
        return {
            sell: parseFloat(apiHuobiResult.tick.data["0"].price.toFixed(2))
        }
    }

    private static transformBitfinexResult(apiResult: ApiBitfinexResult | void): Money {
        if (!apiResult) {
            return ResultTransformer.getErroredMoney();
        }
        const money = apiResult[2] as number;
        return {
            sell: parseFloat(money.toFixed(2)) // This is such a piece of shit api
        }
    }

    private static transformGeminiResult(apiResult: ApiGeminiResult | void): Money {
        if (!apiResult) {
            return ResultTransformer.getErroredMoney();
        }
        return {
            sell: parseFloat(parseFloat(apiResult.bid).toFixed(2))
        }
    }

    private static getErroredMoney(): Money {
        return {
            sell: 0,
            buy: 0,
            spot: 0
        }
    }
}