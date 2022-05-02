import * as apiClient from "../api";
import appConfig from "../config/app";
import {
    BinanceProvider, BitfinexProvider,
    CoinbaseProvider,
    FtxProvider, GeminiProvider, GeminiProviderFactory,
    HuobiProvider,
    KrakenProvider,
    KucoinProvider
} from "../api";

function getBaseHeaders(): apiClient.Headers {
    return {
        "Access-Control-Allow-Origin": appConfig.clientBaseUrl
    };
}

export type Providers = {
    binance: BinanceProvider
    coinbase: CoinbaseProvider
    ftx: FtxProvider
    kucoin: KucoinProvider
    kraken: KrakenProvider
    huobi: HuobiProvider
    bitfinex: BitfinexProvider
    gemini: GeminiProvider
}

export function createBinanceProvider(): apiClient.BinanceProvider {
    const factory = new apiClient.BinanceProviderFactory(
        appConfig.binanceBaseUrl,
        getBaseHeaders()
    );
    return factory.createBinanceProvider();
}

export function createCoinbaseProvider(): apiClient.CoinbaseProvider {
    const factory = new apiClient.CoinbaseProviderFactory(
        appConfig.coinbaseBaseUrl,
        getBaseHeaders()
    )
    return factory.createCoinbaseProvider();
}

export function createFtxProvider(): apiClient.FtxProvider {
    const factory = new apiClient.FtxProviderFactory(
        appConfig.ftxBaseUrl,
        getBaseHeaders()
    );
    return factory.createFtxProvider();
}

export function createKucoinProvider(): apiClient.KucoinProvider {
    const factory = new apiClient.KucoinProviderFactory(
        appConfig.kucoinBaseUrl,
        getBaseHeaders()
    );
    return factory.createKucoinProvider();
}

export function createKrakenProvider(): apiClient.KrakenProvider {
    const factory = new apiClient.KrakenProviderFactory(
        appConfig.krakenBaseUrl,
        getBaseHeaders()
    );
    return factory.createKrakenProvider();
}

export function createHuobiProvider(): apiClient.HuobiProvider {
    const factory = new apiClient.HuobiProviderFactory(
        appConfig.huobiBaseUrl,
        getBaseHeaders()
    );
    return factory.createHuobiProvider();
}

export function createBitfinexProvider(): apiClient.BitfinexProvider {
    const factory = new apiClient.BitfinexProviderFactory(
        appConfig.bitfinexBaseUrl,
        getBaseHeaders()
    );
    return factory.createBitfinexProvider();
}

export function createGeminiProvider(): apiClient.GeminiProvider {
    const factory = new apiClient.GeminiProviderFactory(
        appConfig.geminiBaseUrl,
        getBaseHeaders()
    );
    return factory.createGeminiProvider();
}

export function createProviders(): Providers {
    return {
        binance: createBinanceProvider(),
        coinbase: createCoinbaseProvider(),
        ftx: createFtxProvider(),
        kucoin: createKucoinProvider(),
        kraken: createKrakenProvider(),
        huobi: createHuobiProvider(),
        bitfinex: createBitfinexProvider(),
        gemini: createGeminiProvider()
    }
}