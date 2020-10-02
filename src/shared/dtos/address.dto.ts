import { GeoDTO } from './geo.dto';

export class AddressDTO {
  id: number
  street: string
  suite: string
  city: string
  zipcode: string
  geoId: number

  geo: GeoDTO
}
