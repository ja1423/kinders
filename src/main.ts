import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { loggerFactory } from './common/logger/logger-factory';

async function start() {
  try {
    const config = new DocumentBuilder()
      .setTitle('KinderGarden')
      .setDescription('Mini project for kindergarden')
      .setVersion('1.0')
      .addTag('NESTJS, Swagger, Validation, Typeorm')
      .build();
    const PORT = process.env.PORT || 3333;
    const app = await NestFactory.create(AppModule, {
      logger: loggerFactory('Kindergarden'),
    });
    const document = SwaggerModule.createDocument(app, config);
    app.setGlobalPrefix('api');

    SwaggerModule.setup('/docs', app, document);
    app.use(cookieParser());
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(PORT, () => {
      console.log(`Server ${PORT} portda ishga tushdi`);
    });
  } catch (error) {
    console.log(error);
  }
}
start();
