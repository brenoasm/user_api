import { Test, TestingModule } from '@nestjs/testing';

import { FetchExternalUserService } from './fetch-external-user.service';
import { HttpClientModule } from '../../../../shared/http-client/http-client.module';
import { ConfigurationModule } from '../../../../shared/configuration/configuration.module';
import { ConfigurationService } from '../../../../shared/configuration/configuration.service';

describe('fetchExternalUserService', () => {
  let service: FetchExternalUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpClientModule, ConfigurationModule],
      providers: [FetchExternalUserService, ConfigurationService],
    }).compile();

    service = module.get<FetchExternalUserService>(FetchExternalUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
