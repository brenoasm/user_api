import { Test, TestingModule } from '@nestjs/testing';
import { UserWithSuiteUsecaseService } from './user-with-suite-usecase.service';

describe('UserDownloadUsecaseService', () => {
  let service: UserWithSuiteUsecaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserWithSuiteUsecaseService],
    }).compile();

    service = module.get<UserWithSuiteUsecaseService>(UserWithSuiteUsecaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
