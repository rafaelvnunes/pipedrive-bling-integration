import { Controller, Get, Param } from "@nestjs/common";
import { API_PREFIX, API_VERSION, OPPORTUNITY_ENDPOINT, REPORTS_ENDPOINT } from "src/CommonsModule/utils/constants";
import { OpportunityService } from "../service";
import { Opportunity } from '../schema';
import { DateReportDTO } from "../dto";

@Controller(
    `${API_PREFIX}/${API_VERSION}/${OPPORTUNITY_ENDPOINT}/${REPORTS_ENDPOINT}`,
)
export class OpportunityReport {
    constructor(private readonly service: OpportunityService) {}

    @Get('day/:date')
    public async dayReport(@Param('date') date: string): Promise<DateReportDTO> {
        await this.service.refresh();

        let opportunities: Opportunity[] = await this.service.findByDate(date);
        let totalHours = opportunities.reduce((sum: number, {value}) => sum + value, 0);

        return new DateReportDTO(date, totalHours, opportunities);
    }
}