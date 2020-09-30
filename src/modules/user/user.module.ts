import { Module } from '@nestjs/common';

import { PrismaModule } from 'src/shared/prisma/prisma.module';

import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ExternalUserService } from 'src/shared/services/external-user/external-user.service';
import { ConfigurationService } from 'src/shared/configuration/configuration.service';
import { ServicesModule } from 'src/shared/services/services.module';
import { HttpClientModule } from 'src/shared/http-client/http-client.module';

@Module({
  imports: [PrismaModule, ServicesModule, HttpClientModule],
  providers: [UserService, ExternalUserService, ConfigurationService],
  controllers: [UserController],
})
export class UserModule { }
