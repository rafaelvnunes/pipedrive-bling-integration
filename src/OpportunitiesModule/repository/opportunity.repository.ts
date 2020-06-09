import { InjectModel } from "@nestjs/mongoose";
import { OPPORTUNITY } from "src/CommonsModule/utils/constants";
import { Model } from "mongoose";
import { Opportunity } from "../schema/opportunity.schema";
import { Injectable } from "@nestjs/common";

@Injectable()
export class OpportunityRepository {
    constructor(@InjectModel(OPPORTUNITY) private opportunityModel: Model<Opportunity>) {}

    async create(opportunity: Opportunity): Promise<Opportunity> {
        const newOpportunity = new this.opportunityModel(opportunity);
        return newOpportunity.save();
    }

    async findAll(): Promise<Opportunity[]> {
        return this.opportunityModel.find().exec();
    }
}