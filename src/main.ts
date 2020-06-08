import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigurationService } from './ConfigurationModule';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const appConfigurationService = app.get<ConfigurationService>(ConfigurationService);

  await app.listen(appConfigurationService.port || 8080);
}
bootstrap();
