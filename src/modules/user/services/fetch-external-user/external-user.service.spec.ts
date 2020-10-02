import { Test, TestingModule } from '@nestjs/testing';
import { FetchExternalUserService } from './external-user.service';

describe('ExternalUserService', () => {
  let service: FetchExternalUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FetchExternalUserService],
    }).compile();

    service = module.get<FetchExternalUserService>(FetchExternalUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
