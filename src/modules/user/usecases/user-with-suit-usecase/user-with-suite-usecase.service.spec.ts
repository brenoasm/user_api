import { Logger } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../../../../shared/prisma/prisma.module';
import { HttpClientModule } from '../../../../shared/http-client/http-client.module';
import { FetchExternalUserService } from '../../services/fetch-external-user/fetch-external-user.service';
import { UserService } from '../../services/user-service/user.service';
import { UserWithSuiteUsecaseService } from './user-with-suite-usecase.service';
import { ConfigurationModule } from '../../../../shared/configuration/configuration.module';
import { ConfigurationService } from '../../../../shared/configuration/configuration.service';

describe('UserWithSuiteUsecase', () => {
  let service: UserWithSuiteUsecaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpClientModule, PrismaModule, ConfigurationModule],
      providers: [UserWithSuiteUsecaseService, UserService, FetchExternalUserService, Logger, ConfigurationService],
    }).compile();

    service = module.get<UserWithSuiteUsecaseService>(UserWithSuiteUsecaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
