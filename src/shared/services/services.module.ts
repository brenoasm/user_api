import { Module } from '@nestjs/common';
import { ConfigurationModule } from '../../shared/configuration/configuration.module';
import { HttpClientModule } from '../../shared/http-client/http-client.module';
import { ConfigurationService } from '../../shared/configuration/configuration.service';
import { HttpClientService } from '../../shared/http-client/http-client.service';

import { ExternalUserService } from './external-user/external-user.service';

@Module({
  imports: [HttpClientModule, ConfigurationModule],
  exports: [ExternalUserService, ConfigurationModule, HttpClientModule],
  providers: [HttpClientService, ConfigurationService, ExternalUserService],
})
export class ServicesModule { }
