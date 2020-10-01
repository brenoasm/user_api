import { Address } from "./address";
import { Company } from "./company";

export interface User {
  id: number
  name: string
  email: string
  addressId: number
  companyId: number
  phone: string
  website: string

  address: Address
  company: Company
}
