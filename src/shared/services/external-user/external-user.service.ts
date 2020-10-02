import { Injectable } from '@nestjs/common';
import { ConfigurationService } from 'src/shared/configuration/configuration.service';
import { HttpClientService } from 'src/shared/http-client/http-client.service';
import { UserDTO } from 'src/shared/dtos/user.dto';

@Injectable()
export class ExternalUserService {
  constructor(
    private httpClientService: HttpClientService,
    private configurationService: ConfigurationService
  ) { }

  async getUsers(): Promise<UserDTO[]> {
    const result = await this.httpClientService.client.get<UserDTO[]>(this.configurationService.get('USER_API_URL'));

    if (result.status === 200) {
      return result.data;
    }

    return [];
  }
}
