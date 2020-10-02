import { AddressDTO } from "./address.dto";
import { CompanyDTO } from "./company.dto";
import { ContactDTO } from "./contact.dto";

export class UserDTO {
  id: number
  name: string
  addressId?: number
  companyId?: number
  contactId?: number

  address: AddressDTO
  company: CompanyDTO
  contact: ContactDTO


}
