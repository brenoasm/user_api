import { Controller, Get } from '@nestjs/common';
import { DownloadUsersUsecaseService } from './usecases/download-users-usecase/download-users-usecase.service';
import { UserWithSuiteUsecaseService } from './usecases/user-with-suit-usecase/user-with-suite-usecase.service';

import { UserDTO } from 'src/shared/dtos/user.dto';
import { ApiTags } from '@nestjs/swagger/dist/decorators/api-use-tags.decorator';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(
    private downloadUserUsecase: DownloadUsersUsecaseService,
    private userWithSuiteUsecase: UserWithSuiteUsecaseService,
  ) { }

  @Get('downloadUsers')
  async downloadUsers(): Promise<UserDTO[]> {
    return this.downloadUserUsecase.exec();
  }

  @Get('saveUsersWithSuite')
  async saveUsersWithSuite(): Promise<UserDTO[]> {
    return this.userWithSuiteUsecase.exec();
  }
}
