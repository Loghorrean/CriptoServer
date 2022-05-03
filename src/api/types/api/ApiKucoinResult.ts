import {IApiResponse} from "./IApiResponse";

export interface ApiKucoinResult extends IApiResponse {
    data: {
        price: string
    }
    exchange: "kucoin"
}