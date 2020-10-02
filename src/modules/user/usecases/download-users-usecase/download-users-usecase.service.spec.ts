import { Test, TestingModule } from '@nestjs/testing';
import { DownloadUsersUsecaseService } from './download-users-usecase.service';

describe('DownloadUsersUsecaseService', () => {
  let service: DownloadUsersUsecaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DownloadUsersUsecaseService],
    }).compile();

    service = module.get<DownloadUsersUsecaseService>(DownloadUsersUsecaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
