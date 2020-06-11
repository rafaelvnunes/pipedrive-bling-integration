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
        let opportunityDto: OpportunityDTO = opportunityModel.toObject();
        return opportunityDto;
    }

    toEntity(opportunityDto: Partial<OpportunityDTO>): Opportunity {
        return super.toEntity(opportunityDto);
    }

    toDtoList(opportunitiesModel: Partial<Opportunity>[]): OpportunityDTO[] {
        return opportunitiesModel.map(this.toDto);
    }

    toEntityList(opportunitiesDto: Partial<OpportunityDTO>[]): Opportunity[] {
        return super.toEntityList(opportunitiesDto);
    }
}