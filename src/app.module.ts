import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from 'src/shared/configuration/configuration.module';
import { PrismaModule } from 'src/shared/prisma/prisma.module';
import { UserModule } from 'src/modules/user/user.module';
import { ExternalUserService } from 'src/shared/services/external-user/external-user.service';
import { ConfigurationService } from './shared/configuration/configuration.service';
import { HttpClientModule } from './shared/http-client/http-client.module';
import { ServicesModule } from './shared/services/services.module';

@Module({
  imports: [ConfigurationModule, PrismaModule, UserModule, HttpClientModule, ServicesModule],
  controllers: [AppController],
  providers: [AppService, ExternalUserService, ConfigurationService],
})
export class AppModule { }
