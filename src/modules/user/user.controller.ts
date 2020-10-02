import { Controller, Get } from '@nestjs/common';
import { DownloadUsersUsecaseService } from './usecases/download-users-usecase/download-users-usecase.service';
import { UserWithSuiteUsecaseService } from './usecases/user-with-suit-usecase/user-with-suite-usecase.service';

import { User } from 'src/shared/types/user';

@Controller('user')
export class UserController {
  constructor(
    private downloadUserUsecase: DownloadUsersUsecaseService,
    private userWithSuiteUsecase: UserWithSuiteUsecaseService,
  ) { }

  @Get('downloadUsers')
  async downloadUsers(): Promise<User[]> {
    return this.downloadUserUsecase.exec();
  }

  @Get('saveUsersWithSuite')
  async saveUsersWithSuite(): Promise<User[]> {
    return this.userWithSuiteUsecase.exec();
  }
}
