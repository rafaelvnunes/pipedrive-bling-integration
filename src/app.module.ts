import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigurationModule } from '@nestjs/config';
import { MongooseModule, MongooseModuleAsyncOptions } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule, ConfigurationService } from './ConfigurationModule';
import { OpportunityModule } from './OpportunitiesModule';
import { PipedriveModule } from './PipedriveModule';
import { BlingModule } from './BlingModule';

const mongooseAsyncModule: MongooseModuleAsyncOptions = {
	imports: [ConfigurationModule],
	inject: [ConfigurationService],
	useFactory: async (configurationService: ConfigurationService) => configurationService.getDatabaseURI()
}

@Module({
	imports: [
		ConfigurationModule,
		OpportunityModule,
		PipedriveModule,
		BlingModule,
		NestConfigurationModule.forRoot({isGlobal: true}),
		MongooseModule.forRootAsync(mongooseAsyncModule)
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
