import { Module, HttpModule } from "@nestjs/common";
import { PipedriveService } from "./service";
import { PipedriveController } from "./controller";

@Module({
    imports: [HttpModule],
    controllers: [PipedriveController],
    providers: [PipedriveService]
})
export class PipedriveModule {}