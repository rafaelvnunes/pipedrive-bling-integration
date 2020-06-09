import { Injectable } from "@nestjs/common";
import { OpportunityRepository } from "../repository/opportunity.repository";
import { Opportunity } from "../schema/opportunity.schema";
import { OpportunityDTO } from "../dto/opportunity.dto";
import { OpportunityMapper } from "../mapper/opportunity.mapper";

@Injectable()
export class OpportunityService {
    constructor(
        private readonly mapper: OpportunityMapper,
        private readonly opportunityRepository: OpportunityRepository
    ) {}

    public async create(newOpportunityDto: OpportunityDTO): Promise<Opportunity> {
        const newOpportunity: Opportunity = this.mapper.toEntity(newOpportunityDto);
        return this.opportunityRepository.create(newOpportunity);
    }

    public async findAll(): Promise<OpportunityDTO[]> {
        const opportunities: Opportunity[] = await this.opportunityRepository.findAll();
        console.log('opp: ', opportunities)
        return this.mapper.toDtoList(opportunities);
    }
}