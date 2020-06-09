import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { OpportunitySchema } from "./schema/opportunity.schema";
import { OPPORTUNITY } from "src/CommonsModule/utils/constants";
import { OpportunityController } from "./controller";
import { OpportunityService } from "./service";
import { OpportunityMapper } from "./mapper";
import { OpportunityRepository } from "./repository";

@Module({
    imports: [MongooseModule.forFeature([{name: OPPORTUNITY, schema: OpportunitySchema}])],
    controllers: [OpportunityController],
    providers: [OpportunityService, OpportunityMapper, OpportunityRepository],
    exports: [OpportunityService]
})
export class OpportunityModule {}