import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning();

  const config = new DocumentBuilder()
    .setTitle('Users API')
    .setDescription('This is a simple user API service built with NestJS.')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);

  Logger.log(`🚀 Application is running on: http://localhost:3000`, 'main');
}
bootstrap();
