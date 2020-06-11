import { Injectable, HttpService } from "@nestjs/common";
import { ConfigurationService } from "src/ConfigurationModule";
import { API_PREFIX, API_VERSION } from "src/CommonsModule/utils/constants";

@Injectable()
export class OpportunityHttp {
    domain: string;

    constructor(
        private readonly http: HttpService,
        private readonly configurationService: ConfigurationService
    ) {
        this.domain = this.configurationService.domain;
    }

    get(endpoint: string) {
        return this.http.get(`${this.domain}/${API_PREFIX}/${API_VERSION}/${endpoint}`);
    }

    post(endpoint: string, data: any) {
        return this.http.post(`${this.domain}/${API_PREFIX}/${API_VERSION}/${endpoint}`, data);
    }

    put(endpoint: string, id: number, data: any) {
        const json = JSON.stringify(data);
        return this.http.put(`${this.domain}/${API_PREFIX}/${API_VERSION}/${endpoint}/${id}`, json);
    }
}