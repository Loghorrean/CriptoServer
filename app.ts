const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/.env.local` });
dotenv.config({ path: `${__dirname}/.env` });

import express from 'express';
import {ResultTransformer} from "./src/utils/transform/ResultTransformer";
import {createProviders} from "./src/di";
import * as currencies from "./src/api/enums";
import {setCorsHeaders} from "./src/middleware";
import appConfig from "./src/config/app";

const app = express();
const port = appConfig.appPort;

app.use(setCorsHeaders);

app.get('/prices/:currency', async (req, res) => {
    const transformer = new ResultTransformer();
    const requestCurrency = req.params.currency;
    const providers = createProviders();
    const allResultsPromise = Promise.all([
        providers.binance.getBinanceResult(currencies.BinanceCurrency[requestCurrency]),
        providers.kraken.getKrakenResult(currencies.KrakenCurrency[requestCurrency]),
        providers.ftx.getFtxResult(currencies.FtxCurrency[requestCurrency]),
        providers.coinbase.getCoinbaseSellResult(currencies.CoinbaseCurrency[requestCurrency]),
        providers.kucoin.getKucoinResult(currencies.KucoinCurrency[requestCurrency]),
        providers.huobi.getHuobiResult(currencies.HuobiCurrency[requestCurrency]),
        providers.bitfinex.getBitfinexResult(currencies.BitfinexCurrency[requestCurrency]),
        providers.gemini.getGeminiResult(currencies.GeminiCurrency[requestCurrency])
    ]);
    const results = await allResultsPromise.then((
        [
            binance,
            kraken,
            ftx,
            coinbase,
            kucoin,
            huobi,
            bitfinex,
            gemini
        ]
    ) => {
        return { binance, kraken, ftx, coinbase, kucoin, huobi, bitfinex, gemini }
    });
    res.status(200).json(transformer.transformResult(results));
})

app.listen(port, () => {
    console.log(`Timezones by location application is running on port ${port}.`);
});

module.exports = app;