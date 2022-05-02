import {IApiResponse} from "./IApiResponse";

export interface ApiKrakenResult extends IApiResponse {
    result: {
        XXBTZUSD: {
            a: Array<any>
        }
    }
    exchange: "kraken"
}