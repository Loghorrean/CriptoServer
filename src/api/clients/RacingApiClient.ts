import {ApiClientDecorator} from "./ApiClientDecorator";
import {ApiClientInterface} from "./ApiClientInterface";

export class RacingApiClient extends ApiClientDecorator {
    constructor(apiClientInterface: ApiClientInterface) {
        super(apiClientInterface);
    }

    async get(endpoint: string = "", params?: object) {
        return Promise.race([
            super.get(endpoint, params),
            this.setTimer()
        ]);
    }

    private setTimer(): Promise<any> {
        return new Promise((_res, rej) => {
            setTimeout(function () {
                rej({
                    "error": "Reached maximum response waiting time (2 seconds)"
                });
            }, 5000);
        });
    }
}