import { Logger } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { HttpClientService } from '../../../../shared/http-client/http-client.service';
import { HttpClientModule } from '../../../../shared/http-client/http-client.module';
import { FetchExternalUserService } from '../../services/fetch-external-user/fetch-external-user.service';
import { DownloadUsersUsecaseService } from './download-users-usecase.service';
import { ConfigurationModule } from '../../../../shared/configuration/configuration.module';
import { ConfigurationService } from '../../../../shared/configuration/configuration.service';

describe('DownloadUsersUsecaseService', () => {
  let service: DownloadUsersUsecaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpClientModule, ConfigurationModule],
      providers: [DownloadUsersUsecaseService, FetchExternalUserService, Logger, HttpClientService, ConfigurationService],
    }).compile();

    service = module.get<DownloadUsersUsecaseService>(DownloadUsersUsecaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
