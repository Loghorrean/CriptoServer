import {IApiResponse} from "./IApiResponse";

export interface ApiHuobiResult extends IApiResponse {
    tick: {
        data: {
            0: {
                price: number
            }
        }
    }
    exchange: "huobi"
}