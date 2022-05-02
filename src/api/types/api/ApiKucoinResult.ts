import {IApiResponse} from "./IApiResponse";

export interface ApiKucoinResult extends IApiResponse {
    data: {
        price: number
    }
    exchange: "kucoin"
}