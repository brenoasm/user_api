import { Logger, Module } from '@nestjs/common';

import { PrismaModule } from '../../shared/prisma/prisma.module';
import { HttpClientModule } from '../../shared/http-client/http-client.module';

import { UserService } from './services/user-service/user.service';
import { UserController } from './user.controller';
import { UserWithSuiteUsecaseService } from './usecases/user-with-suit-usecase/user-with-suite-usecase.service';
import { DownloadUsersUsecaseService } from './usecases/download-users-usecase/download-users-usecase.service';
import { FetchExternalUserService } from './services/fetch-external-user/fetch-external-user.service';
import { ConfigurationService } from '../../shared/configuration/configuration.service';

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
