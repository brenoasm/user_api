import { Test, TestingModule } from '@nestjs/testing';
import { ExternalUserService } from './external-user.service';

describe('ExternalUserService', () => {
  let service: ExternalUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExternalUserService],
    }).compile();

    service = module.get<ExternalUserService>(ExternalUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
