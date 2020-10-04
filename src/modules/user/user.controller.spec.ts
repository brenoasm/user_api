import { Logger } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigurationService } from '../../shared/configuration/configuration.service';
import { HttpClientService } from '../../shared/http-client/http-client.service';
import { ConfigurationModule } from '../../shared/configuration/configuration.module';
import { HttpClientModule } from '../../shared/http-client/http-client.module';
import { PrismaModule } from '../../shared/prisma/prisma.module';
import { DownloadUsersUsecaseService } from './usecases/download-users-usecase/download-users-usecase.service';
import { UserWithSuiteUsecaseService } from './usecases/user-with-suit-usecase/user-with-suite-usecase.service';
import { UserController } from './user.controller';
import { FetchExternalUserService } from './services/fetch-external-user/fetch-external-user.service';
import { UserService } from './services/user-service/user.service';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigurationModule, HttpClientModule, PrismaModule],
      controllers: [UserController],
      providers: [
        DownloadUsersUsecaseService,
        UserWithSuiteUsecaseService,
        ConfigurationService,
        HttpClientService,
        FetchExternalUserService,
        Logger,
        UserService,
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
