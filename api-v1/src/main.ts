import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule } from '@nestjs/swagger';
//
import { swaggerConfig } from './shared/config';
import { WipHelper } from './api/wip/utils/wip.helper';
//
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  
  // Middleware
  app.setGlobalPrefix('api/v2');

  // CORS
  const corsEnabled = configService.get<boolean>('CORS_ENABLED');
  const corsOrigin = configService
    .get<string>('CORS_ORIGIN')
    .replaceAll(' ', '')
    .split(',');
  corsEnabled && app.enableCors({ origin: corsOrigin });

  // Swagger
  const documentFactory = () =>
    SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('', app, documentFactory);

  // Start
  const port = configService.get<number>('PORT', 3000);
  await app.listen(port);
  console.log(`🚀 ~ bootstrap: http://127:0.0.1:${port}`);

  // Debug
  // await WipHelper.main()
}

bootstrap();
