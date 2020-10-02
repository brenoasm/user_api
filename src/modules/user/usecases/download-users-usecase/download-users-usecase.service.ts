import { Inject, Injectable, Logger, LoggerService } from '@nestjs/common';
import { Usecase } from 'src/shared/models/user-case';

import { ExternalUserService } from 'src/shared/services/external-user/external-user.service';
import { UserDTO } from 'src/shared/dtos/user.dto';

@Injectable()
export class DownloadUsersUsecaseService implements Usecase<UserDTO[]> {
  constructor(
    private readonly externalUserService: ExternalUserService,
    @Inject(Logger) private readonly logger: LoggerService
  ) { }

  async exec(): Promise<UserDTO[]> {
    this.logger.log('Starting DownloadUsersUsecaseService...');

    try {
      const users = await this.externalUserService.getUsers();

      return users;
    } catch (error) {
      this.logger.error('Error on getting external users', error);
    } finally {
      this.logger.log('Ending DownloadUsersUsecaseService...');
    }
  }
}
