import { Module, HttpModule } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { OpportunitySchema } from "./schema/opportunity.schema";
import { OPPORTUNITY } from "src/CommonsModule/utils/constants";
import { OpportunityController } from "./controller";
import { OpportunityService, OpportunityHttp } from "./service";
import { OpportunityMapper, DealMapper, BlingMapper } from "./mapper";
import { OpportunityRepository } from "./repository";
import { OpportunityReport } from "./report";
import { BlingModule } from "src/BlingModule";

@Module({
    imports: [BlingModule, HttpModule, MongooseModule.forFeature([{name: OPPORTUNITY, schema: OpportunitySchema}])],
    controllers: [OpportunityController, OpportunityReport],
    providers: [OpportunityService, OpportunityMapper, DealMapper, BlingMapper, OpportunityRepository, OpportunityHttp],
    exports: [OpportunityService]
})
export class OpportunityModule {}