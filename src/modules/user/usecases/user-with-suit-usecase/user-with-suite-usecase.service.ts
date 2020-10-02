import { Inject, Injectable, Logger, LoggerService } from '@nestjs/common';
import { FetchExternalUserService } from 'src/modules/user/services/fetch-external-user/external-user.service';
import { UserDTO as UserDTO } from 'src/shared/dtos/user.dto';

import { modelToTransferObject, transferObjectToUserCreate } from '../../user.mapper';
import { UserService } from '../../services/user-service/user.service';

import { Usecase } from 'src/shared/models/user-case';

@Injectable()
export class UserWithSuiteUsecaseService implements Usecase<UserDTO[]> {
  constructor(
    private readonly userService: UserService,
    private readonly fetchExternalUserService: FetchExternalUserService,
    @Inject(Logger) private readonly logger: LoggerService
  ) { }

  async exec(): Promise<UserDTO[]> {
    this.logger.log('Starting UserWithSuiteUsecaseService...');

    const users = await this.fetchExternalUserService.getUsers();

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
            this.logger.error('Something happened when trying to insert a new user.', error.stack);
          }
        })
      );

      this.logger.log('Ending UserWithSuiteUsecaseService...');

      return insertedUsers;
    }

    this.logger.log('Ending UserWithSuiteUsecaseService...');

    return [];
  }
}
