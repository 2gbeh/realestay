import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Aladdin')
  .setDescription('Expense Tracker REST API')
  .setVersion('1.0')
  .build();
