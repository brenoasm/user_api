import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger/dist/document-builder';
import { SwaggerModule } from '@nestjs/swagger/dist/swagger-module';
import { WinstonModule, utilities as nestWinstonModuleUtilities } from 'nest-winston';
import * as winston from 'winston';

import { AppModule } from './app.module';
import { ConfigurationService } from './shared/configuration/configuration.service';


declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            nestWinstonModuleUtilities.format.nestLike(),
          ),
        }),
        new winston.transports.File({
          filename: './logs/exceptions.log',
          level: 'error',
        }),
        new winston.transports.File({
          filename: './logs/info.log',
          level: 'info',
        }),
      ],
    })
  });

  const config = app.get(ConfigurationService);

  const options = new DocumentBuilder()
    .setTitle('User Api')
    .setDescription('Just some api for a test.')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || config.get("PORT"));

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
