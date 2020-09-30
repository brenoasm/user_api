import { Injectable } from '@nestjs/common';
import Axios, { AxiosInstance } from 'axios';

@Injectable()
export class HttpClientService {
  public client: AxiosInstance;

  constructor() {
    this.client = Axios.create();
  }
}
