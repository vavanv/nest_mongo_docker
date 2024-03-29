import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  console.log(`🚀 Application running with db ${process.env.DATABASE_URL} `);
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.APP_PORT, () => {
    console.log(`🚀 Application running at port ${process.env.APP_PORT}`);
  });
}
bootstrap();
