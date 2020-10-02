import { Module, Logger } from '@nestjs/common';
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
  providers: [
    ExternalUserService,
    ConfigurationService,
    Logger
  ],
})
export class AppModule { }
