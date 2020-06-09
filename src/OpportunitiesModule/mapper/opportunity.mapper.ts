import { Injectable } from "@nestjs/common";
import { Opportunity } from "../schema/opportunity.schema";
import { OpportunityDTO } from "../dto/opportunity.dto";
import { Mapper } from "src/CommonsModule/mapper";

@Injectable()
export class OpportunityMapper extends Mapper<Opportunity, OpportunityDTO> {
    constructor() {
        super(Opportunity, OpportunityDTO)
    }

    toDto(opportunityModel: Partial<Opportunity>): OpportunityDTO {
        return super.toDto(opportunityModel);
    }

    toEntity(opportunityDto: Partial<OpportunityDTO>): Opportunity {
        return super.toEntity(opportunityDto);
    }

    toDtoList(opportunitiesModel: Opportunity[]): OpportunityDTO[] {
        return super.toDtoList(opportunitiesModel);
    }

    toEntityList(opportunitiesDto: OpportunityDTO[]): Opportunity[] {
        return super.toEntityList(opportunitiesDto);
    }
}