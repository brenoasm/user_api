import { Inject, Injectable, Logger, LoggerService } from '@nestjs/common';
import { ExternalUserService } from 'src/shared/services/external-user/external-user.service';
import { User as UserTO } from 'src/shared/types/user';

import { modelToTransferObject, transferObjectToUserCreate } from '../../user.mapper';
import { UserService } from '../../user.service';

import { Usecase } from 'src/shared/models/user-case';

@Injectable()
export class UserWithSuiteUsecaseService implements Usecase<UserTO[]> {
  constructor(
    private readonly userService: UserService,
    private readonly externalUserService: ExternalUserService,
    @Inject(Logger) private readonly logger: LoggerService
  ) { }

  async exec(): Promise<UserTO[]> {
    this.logger.log('Starting UserWithSuiteUsecaseService...');

    const users = await this.externalUserService.getUsers();

    if (users.length > 0) {
      const usersWithSuite = users.filter(user => {
        return user.address.suite.includes('Suite');
      });

      const insertedUsers = await Promise.all(
        usersWithSuite.map(async (user) => {
          try {
            const userInDb = await this.userService.user({
              id: user.id,
            });

            if (userInDb != null) {
              return modelToTransferObject(userInDb);
            }

            const insertedUser = await this.userService.createUser(transferObjectToUserCreate(user));

            return modelToTransferObject(insertedUser);
          } catch (error) {
            this.logger.error('User already in the DB', error);
          }
        })
      );

      return insertedUsers;
    }

    this.logger.log('Ending UserWithSuiteUsecaseService...');

    return [];
  }
}
