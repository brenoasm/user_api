import { Geo } from './geo';

export interface Address {
  id: number
  street: string
  suite: string
  city: string
  zipcode: string
  geoId: number

  geo: Geo
}
