import { InjectModel } from "@nestjs/mongoose";
import { OPPORTUNITY } from "src/CommonsModule/utils/constants";
import { Model } from "mongoose";
import { Opportunity } from "../schema/opportunity.schema";
import { Injectable } from "@nestjs/common";
import { NewOpportunityDTO, OpportunityDTO, PipedriveDealDTO } from "../dto";

@Injectable()
export class OpportunityRepository {
    constructor(@InjectModel(OPPORTUNITY) private opportunityModel: Model<Opportunity>) { }

    async create(opportunity: NewOpportunityDTO): Promise<Opportunity> {
        const newOpportunity = new this.opportunityModel(opportunity);
        return newOpportunity.save();
    }

    async upsert(opportunities: OpportunityDTO[]): Promise<Opportunity[]> {
        let savedOpportunities: Opportunity[] = [];
        opportunities.forEach(async opportunity => {
            delete opportunity._id;
            delete opportunity.blingId;

            if(!opportunity.transaction || !opportunity.transaction.type)
                opportunity.transaction = {type: 'U'}
            if(opportunity.value >=0) {
                let lastDayThisMonth: Date = new Date();
                lastDayThisMonth.setMonth(lastDayThisMonth.getMonth() + 1);
                lastDayThisMonth.setDate(0);

                opportunity.transaction.dueDay = lastDayThisMonth.getDate();
                opportunity.transaction.dueDate = lastDayThisMonth.toISOString().split('T')[0];
            }

            savedOpportunities.push(await this.opportunityModel
                .findOneAndUpdate({pipedriveId: opportunity.pipedriveId}, opportunity, {upsert: true}).exec())
        });
        return savedOpportunities;
    }

    async update(opportunityDTO: OpportunityDTO): Promise<Opportunity> {
        return this.opportunityModel.updateOne({pipedriveId: opportunityDTO.pipedriveId}, opportunityDTO).exec();
    }

    async findAll(): Promise<Opportunity[]> {
        return this.opportunityModel.find().exec();
    }

    async findByPaymentDueDate(date: string): Promise<Opportunity[]> {
        return this.opportunityModel.find({'transaction.dueDate': (new Date(date)).toISOString().split('T')[0]}).exec();
    }
}