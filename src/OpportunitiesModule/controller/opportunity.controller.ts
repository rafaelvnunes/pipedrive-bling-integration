import { Controller, Get, Post, Body, HttpCode } from "@nestjs/common";
import { OpportunityService } from "../service/opportunity.service";
import { OpportunityDTO } from "../dto/opportunity.dto";
import { OPPORTUNITY_ENDPOINT, API_VERSION, API_PREFIX } from "src/CommonsModule/utils/constants";
import { NewOpportunityDTO } from "../dto";
import { OpportunityMapper } from "../mapper";

@Controller(
    `${API_PREFIX}/${API_VERSION}/${OPPORTUNITY_ENDPOINT}`,
)
export class OpportunityController {
    constructor(
        private readonly mapper: OpportunityMapper,
        private readonly service: OpportunityService
    ) {}

    @Get()
    public async findAll(): Promise<OpportunityDTO[]> {
        return this.mapper.toDtoList(await this.service.findAll());
    }

    @Get('refresh')
    public async refresh(): Promise<OpportunityDTO[]> {
        return this.mapper.toDtoList(await this.service.refresh());
    }

    @Post()
    @HttpCode(201)
    public async create(@Body() newOpportunity: NewOpportunityDTO): Promise<OpportunityDTO> {
        return this.mapper.toDto(await this.service.create(newOpportunity));
    }
}