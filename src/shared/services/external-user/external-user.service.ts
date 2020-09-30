import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { ConfigurationService } from 'src/shared/configuration/configuration.service';
import { HttpClientService } from 'src/shared/http-client/http-client.service';

@Injectable()
export class ExternalUserService {
    constructor(private httpClientService: HttpClientService, private configurationService: ConfigurationService) { }

    async getUsers(): Promise<User[]> {
        const result = await this.httpClientService.client.get('https://jsonplaceholder.typicode.com/users');

        console.log('RESULT==== ', result);

        return [];
    }
}
