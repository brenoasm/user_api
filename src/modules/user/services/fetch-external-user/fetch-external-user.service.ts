import { Injectable } from '@nestjs/common';
import { ConfigurationService } from '../../../../shared/configuration/configuration.service';
import { HttpClientService } from '../../../../shared/http-client/http-client.service';
import { UserDTO } from 'src/shared/dtos/user.dto';

@Injectable()
export class FetchExternalUserService {
  constructor(
    private httpClientService: HttpClientService,
    private configurationService: ConfigurationService
  ) { }

  async getUsers(): Promise<UserDTO[]> {
    const result = await this.httpClientService.client.get(this.configurationService.get('USER_API_URL'));

    if (result.status === 200) {
      return result.data.map((r) => <UserDTO>{
        id: r.id,
        name: r.name,
        address: r.address,
        company: r.company,
        contact: {
          email: r.email,
          phone: r.phone,
          website: r.website,
        }
      });
    }

    return [];
  }
}
