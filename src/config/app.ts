const envConfig = require('dotenv').config().parsed;

const appConfig = {
    get appPort(): number {
        return parseInt(envConfig.APP_PORT || "3000");
    },
    get binanceBaseUrl(): string {
        return envConfig.BINANCE_BASE_URL || "";
    },
    get coinbaseBaseUrl(): string {
        return envConfig.COINBASE_BASE_URL || "";
    },
    get ftxBaseUrl() {
        return envConfig.FTX_BASE_URL || "";
    },
    get kucoinBaseUrl(): string {
        return envConfig.KUCOIN_BASE_URL || "";
    },
    get krakenBaseUrl(): string {
        return envConfig.KRAKEN_BASE_URL || "";
    },
    get huobiBaseUrl(): string {
        return envConfig.HUOBI_BASE_URL || "";
    },
    get bitfinexBaseUrl(): string {
        return envConfig.BITFINEX_BASE_URL || "";
    },
    get geminiBaseUrl(): string {
        return envConfig.GEMINI_BASE_URL || "";
    },
    get clientBaseUrl(): string {
        return envConfig.CLIENT_BASE_URL || "";
    }
}

export default appConfig;