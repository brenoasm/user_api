import { Module } from '@nestjs/common';
import { ConfigurationModule } from '../configuration/configuration.module';
import { ConfigurationService } from '../configuration/configuration.service';
import { HttpClientModule } from '../http-client/http-client.module';
import { HttpClientService } from '../http-client/http-client.service';
import { ExternalUserService } from './external-user/external-user.service';

@Module({
  imports: [HttpClientModule, ConfigurationModule],
  exports: [ExternalUserService],
  providers: [HttpClientService, ConfigurationService, ExternalUserService],
})
export class ServicesModule { }
