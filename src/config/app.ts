const appConfig = {
    get appPort(): number {
        return parseInt(process.env.APP_PORT || "3000");
    },
    get binanceBaseUrl(): string {
        return process.env.BINANCE_BASE_URL || "";
    },
    get coinbaseBaseUrl(): string {
        return process.env.COINBASE_BASE_URL || "";
    },
    get ftxBaseUrl() {
        return process.env.FTX_BASE_URL || "";
    },
    get kucoinBaseUrl(): string {
        return process.env.KUCOIN_BASE_URL || "";
    },
    get krakenBaseUrl(): string {
        return process.env.KRAKEN_BASE_URL || "";
    },
    get huobiBaseUrl(): string {
        return process.env.HUOBI_BASE_URL || "";
    },
    get bitfinexBaseUrl(): string {
        return process.env.BITFINEX_BASE_URL || "";
    },
    get geminiBaseUrl(): string {
        return process.env.GEMINI_BASE_URL || "";
    },
    get clientBaseUrl(): string {
        return process.env.CLIENT_BASE_URL || "";
    }
}

export default appConfig;