import { Logger, Module } from '@nestjs/common';

import { PrismaModule } from 'src/shared/prisma/prisma.module';

import { UserService } from './services/user-service/user.service';
import { UserController } from './user.controller';
import { FetchExternalUserService } from 'src/modules/user/services/fetch-external-user/external-user.service';
import { ConfigurationService } from 'src/shared/configuration/configuration.service';
import { UserWithSuiteUsecaseService } from './usecases/user-with-suit-usecase/user-with-suite-usecase.service';
import { DownloadUsersUsecaseService } from './usecases/download-users-usecase/download-users-usecase.service';
import { HttpClientModule } from 'src/shared/http-client/http-client.module';

@Module({
  imports: [PrismaModule, HttpClientModule],
  providers: [
    UserService,
    FetchExternalUserService,
    ConfigurationService,
    Logger,
    UserWithSuiteUsecaseService,
    DownloadUsersUsecaseService,
  ],
  controllers: [UserController],
})
export class UserModule { }
