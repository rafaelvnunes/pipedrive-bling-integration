import { Injectable, HttpService } from "@nestjs/common";
import { ConfigurationService } from "src/ConfigurationModule";
import { Observable } from "rxjs";
import { AxiosResponse, AxiosRequestConfig } from 'axios';

@Injectable()
export class BlingHttp {
    private apiKey: string;    
    constructor(
        private readonly http: HttpService,
        private readonly configurationService: ConfigurationService
    ) {
        this.apiKey = this.configurationService.blingApiKey;
    }

    create(endpoint: string, data: string, config?: AxiosRequestConfig): Observable<AxiosResponse<any>> {
        let url: string = this.buildUrl(endpoint);
        if(data) url += `&xml=${data}`;
        return this.http.post<any>(url, null, {headers: {'Accept': '*/*','content-type': 'application/x-www-form-urlencoded'}});
    }

    findAll(endpoint: string, config?: AxiosRequestConfig): Observable<AxiosResponse<any>> {
        const url: string = this.buildUrl(endpoint);
        return this.http.get<any>(url, config);
    }

    private buildUrl(endpoint: string) {
        return `https://bling.com.br/b/Api/v2/${endpoint}/json?apikey=${this.apiKey}`;
    }
}