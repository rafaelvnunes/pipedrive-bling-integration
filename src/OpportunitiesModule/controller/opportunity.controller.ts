import { Controller, Get } from "@nestjs/common";
import { OpportunityService } from "../service/opportunity.service";
import { OpportunityDTO } from "../dto/opportunity.dto";
import { OPPORTUNITY_ENDPOINT, API_VERSION, API_PREFIX } from "src/CommonsModule/utils/constants";

@Controller(
    `${API_PREFIX}/${API_VERSION}/${OPPORTUNITY_ENDPOINT}`,
)
export class OpportunityController {
    constructor(private readonly opportunityService: OpportunityService) {}

    @Get()
    public async findAll(): Promise<OpportunityDTO[]> {
        return this.opportunityService.findAll();
    }
}