import { Injectable } from '@nestjs/common';
import { ExternalUserService } from 'src/shared/services/external-user/external-user.service';
import { User as UserTO } from 'src/shared/types/user';
// import { Address as AddressModel } from '@prisma/client';

import { transferObjectToUserCreate } from '../../user.mapper';

import { UserService } from '../../user.service';

@Injectable()
export class UserWithSuiteUsecaseService {
  constructor(
    private readonly userService: UserService,
    private readonly externalUserService: ExternalUserService
  ) { }

  async saveUsersWithSuite(): Promise<UserTO[]> {
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
              return userInDb;
            }

            const insertedUser = await this.userService.createUser(transferObjectToUserCreate(user));

            return insertedUser;
          } catch (error) {
            console.log(error)
          }
        })
      );

      console.log('INSERTED_USERS===', insertedUsers);
    }

    return [];
  }
}
