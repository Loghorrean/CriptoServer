import {ApiClientInterface} from "../../clients";

export interface ApiClientFactoryInterface {
    createApiClient(): ApiClientInterface;
    createAuthorizedApiClient(authToken: string): ApiClientInterface;
}