import { Controller, Get, Inject, Logger, LoggerService } from '@nestjs/common';
import { ExternalUserService } from 'src/shared/services/external-user/external-user.service';
import { User } from 'src/shared/types/user';
import { UserWithSuiteUsecaseService } from './usecases/user-with-suit-usecase/user-with-suite-usecase.service';


@Controller('user')
export class UserController {
  constructor(
    private externalUserService: ExternalUserService,
    private downloadUserUsecase: UserWithSuiteUsecaseService,
    @Inject(Logger) private readonly logger: LoggerService,
  ) { }

  @Get('downloadUsers')
  async downloadUsers(): Promise<User[]> {
    return this.externalUserService.getUsers();
  }

  @Get('saveUsersWithSuite')
  async saveUsersWithSuite(): Promise<User[]> {
    return this.downloadUserUsecase.saveUsersWithSuite();
  }
}
