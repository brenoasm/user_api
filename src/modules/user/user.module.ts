import { Logger, Module } from '@nestjs/common';

import { PrismaModule } from 'src/shared/prisma/prisma.module';

import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ExternalUserService } from 'src/shared/services/external-user/external-user.service';
import { ConfigurationService } from 'src/shared/configuration/configuration.service';
import { ServicesModule } from 'src/shared/services/services.module';
import { UserWithSuiteUsecaseService } from './usecases/user-with-suit-usecase/user-with-suite-usecase.service';
import { DownloadUsersUsecaseService } from './usecases/download-users-usecase/download-users-usecase.service';

@Module({
  imports: [PrismaModule, ServicesModule],
  providers: [
    UserService,
    ExternalUserService,
    ConfigurationService,
    Logger,
    UserWithSuiteUsecaseService,
    DownloadUsersUsecaseService
  ],
  controllers: [UserController],
})
export class UserModule { }
