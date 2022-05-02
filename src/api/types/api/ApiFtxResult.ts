import {IApiResponse} from "./IApiResponse";

export interface ApiFtxResult extends IApiResponse {
    result: {
        name: string
        price: number
        type: string
    }
    exchange: "ftx"
}