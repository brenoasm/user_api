import { Inject, Injectable, Logger, LoggerService } from '@nestjs/common';
import { Usecase } from 'src/shared/models/user-case';

import { UserDTO } from 'src/shared/dtos/user.dto';
import { FetchExternalUserService } from '../../services/fetch-external-user/fetch-external-user.service';

@Injectable()
export class DownloadUsersUsecaseService implements Usecase<UserDTO[]> {
  constructor(
    private readonly fetcheExternalUserService: FetchExternalUserService,
    @Inject(Logger) private readonly logger: LoggerService
  ) { }

  async exec(): Promise<UserDTO[]> {
    this.logger.log('Starting DownloadUsersUsecaseService...');

    try {
      const users = await this.fetcheExternalUserService.getUsers();

      return users;
    } catch (error) {
      this.logger.error('Error on getting external users', error);
    } finally {
      this.logger.log('Ending DownloadUsersUsecaseService...');
    }
  }
}
