import { Injectable } from "@nestjs/common";
import { OpportunityDTO } from "../dto/opportunity.dto";
import { Mapper } from "src/CommonsModule/mapper";
import { PipedriveDealDTO } from "../dto";

@Injectable()
export class DealMapper extends Mapper<OpportunityDTO, PipedriveDealDTO> {
    constructor() {
        super(OpportunityDTO, PipedriveDealDTO)
    }

    toDto(opportunityModel: Partial<OpportunityDTO>): PipedriveDealDTO {
        return super.toDto(opportunityModel);
    }

    toEntity(opportunityDto: Partial<PipedriveDealDTO>): OpportunityDTO {
        return super.toEntity(opportunityDto);
    }

    toDtoList(opportunitiesModel: Partial<OpportunityDTO>[]): PipedriveDealDTO[] {
        return super.toDtoList(opportunitiesModel);
    }

    toEntityList(opportunitiesDto: Partial<PipedriveDealDTO>[]): OpportunityDTO[] {
        return super.toEntityList(opportunitiesDto);
    }
}