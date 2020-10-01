import { Module, Logger } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { ConfigurationModule } from './shared/configuration/configuration.module';
import { ConfigurationService } from './shared/configuration/configuration.service';
import { HttpClientModule } from './shared/http-client/http-client.module';
import { PrismaModule } from './shared/prisma/prisma.module';
import { ExternalUserService } from './shared/services/external-user/external-user.service';
import { ServicesModule } from './shared/services/services.module';


@Module({
  imports: [
    ConfigurationModule,
    PrismaModule,
    UserModule,
    HttpClientModule,
    ServicesModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ExternalUserService,
    ConfigurationService,
    Logger
  ],
})
export class AppModule { }
