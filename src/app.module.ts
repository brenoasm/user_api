import { Module, Logger } from '@nestjs/common';

import { UserModule } from './modules/user/user.module';
import { ConfigurationModule } from './shared/configuration/configuration.module';
import { ConfigurationService } from './shared/configuration/configuration.service';
import { HttpClientModule } from './shared/http-client/http-client.module';
import { PrismaModule } from './shared/prisma/prisma.module';
import { FetchExternalUserService } from './modules/user/services/fetch-external-user/fetch-external-user.service';


@Module({
  imports: [
    ConfigurationModule,
    PrismaModule,
    UserModule,
    HttpClientModule,
  ],
  providers: [
    FetchExternalUserService,
    ConfigurationService,
    Logger
  ],
})
export class AppModule { }
