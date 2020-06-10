import { Injectable, HttpService } from "@nestjs/common";
import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { Observable } from "rxjs";
import { ConfigurationService } from "src/ConfigurationModule";
import { PipedriveWebhookPayload } from "../dto/webhook-payload.dto";

@Injectable()
export class PipedriveService {
    private domain: string;
    private apiKey: string;

    constructor(
        private readonly http: HttpService,
        private readonly configurationService: ConfigurationService
    ) {
        this.apiKey = this.configurationService.pipedriveApiKey;
        this.domain = this.configurationService.pipedriveCompanyDomain;
    }

    processWebhook(payload: PipedriveWebhookPayload): void{
        if(payload.meta.action === 'updated' && payload.current.status === 'won') {
            // Need to insert logic for building a DTO for addition on Bling and another for the MongoDB
            // The DTO ts class need to be on this package, not others
            // Then fire to endpoints on the MongoDB package and the Bling package
        }
    }

    search(endpoint: string, queryParams?: string, options?: AxiosRequestConfig): Observable<AxiosResponse<any>> {
        const url: string = this.buildUrl(endpoint, queryParams);
        return this.http.get<any>(url, options);
    }

    findAll(endpoint: string, options?: AxiosRequestConfig): Observable<AxiosResponse<any>> {
        const url: string = this.buildUrl(endpoint);
        return this.http.get<any>(url, options);
    }

    private buildUrl(endpoint: string, queryParams?: string): string {
        let url: string = `https://${this.domain}.pipedrive.com/api/v1/${endpoint}?`;
        if(queryParams) url += `${queryParams}&`
        return url += `api_token=${this.apiKey}`;
    }
}