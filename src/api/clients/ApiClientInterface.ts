export interface ApiClientInterface {
    get(endpoint: string, params?: object): Promise<any>;
}