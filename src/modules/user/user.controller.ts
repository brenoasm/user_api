import { Controller, Get } from '@nestjs/common';
import { User } from '@prisma/client';
import { ExternalUserService } from 'src/shared/services/external-user/external-user.service';

@Controller('user')
export class UserController {
  constructor(private externalUserService: ExternalUserService) { }

  @Get()
  async getUsers(): Promise<User[]> {
    await this.externalUserService.getUsers();

    return [];
  }
}
