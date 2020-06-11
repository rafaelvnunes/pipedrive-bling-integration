import { Controller, Post, Get, Param } from "@nestjs/common";
import { AxiosResponse } from 'axios'
import { API_PREFIX, API_VERSION, PIPEDRIVE_ENDPOINT } from "src/CommonsModule/utils/constants";
import { PipedriveService } from "../service";
import { PipedriveWebhookPayload } from "../dto/webhook-payload.dto";
import { PipedriveDealDTO } from "../dto/deal.dto";

@Controller(
    `${API_PREFIX}/${API_VERSION}/${PIPEDRIVE_ENDPOINT}`,
)
export class PipedriveController {
    constructor(private readonly pipedriveService: PipedriveService) {}

    @Get('deals')
    public async findAll(): Promise<PipedriveDealDTO[]>{
        return this.pipedriveService.findAll('deals')
            .toPromise().then((response: AxiosResponse<PipedriveDealDTO[]>) => response.data);
    }

    @Get('deals/status/:status')
    public async findByStatus(@Param('status') status: string): Promise<PipedriveDealDTO[]> {
        return this.pipedriveService.search('deals', `status=${status}`)
            .toPromise().then((response: AxiosResponse<PipedriveDealDTO[]>) => response.data);
    }

    @Post('webhook')
    public webhook(webhookPayload: PipedriveWebhookPayload): void {
        this.pipedriveService.processWebhook(webhookPayload);
    }
}