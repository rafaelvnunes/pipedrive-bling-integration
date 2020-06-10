import { Injectable } from "@nestjs/common";
import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from "@nestjs/mongoose";

@Injectable()
export class AppConfigurationService {
    constructor(private readonly configurationService: ConfigService) { }

    port: number = this.configurationService.get<number>('PORT');

    pipedriveApiKey: string = this.configurationService.get<string>('PIPEDRIVE_API_KEY');
    pipedriveCompanyDomain: string = this.configurationService.get<string>('PIPEDRIVE_COMPANY_DOMAIN');

    private databaseHost: string = this.configurationService.get<string>('DATABASE_HOST');
    private databaseName: string = this.configurationService.get<string>('DATABASE_NAME');
    private databaseUser: string = this.configurationService.get<string>('DATABASE_USERNAME');
    private databasePassword: string = this.configurationService.get<string>('DATABASE_PASSWORD');
    private databaseAuthSource: string = this.configurationService.get<string>('DATABASE_AUTH_SOURCE');

    getDatabaseURI(): MongooseModuleOptions {
        return {uri: `mongodb+srv://${this.databaseUser}:${this.databasePassword}@${this.databaseHost}/` +
            `${this.databaseName}?authSource=${this.databaseAuthSource}`};
    }

}