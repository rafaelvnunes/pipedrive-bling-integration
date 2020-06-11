import { Module, HttpModule } from "@nestjs/common";
import { BlingService, BlingHttp } from "./service";
import { BlingController } from "./controller";

@Module({
    imports: [HttpModule],
    controllers: [BlingController],
    providers: [BlingHttp, BlingService],
    exports: [BlingService]
})
export class BlingModule {}