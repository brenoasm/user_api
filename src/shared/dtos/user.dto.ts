import { AddressDTO } from "./address.dto";
import { CompanyDTO } from "./company.dto";

export class UserDTO {
  id: number
  name: string
  email: string
  addressId: number
  companyId: number
  phone: string
  website: string

  address: AddressDTO
  company: CompanyDTO
}
