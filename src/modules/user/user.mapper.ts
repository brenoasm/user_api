import { UserDTO } from '../../shared/dtos/user.dto';
import { UserCreateInput } from '@prisma/client';
import { UserWithIncludes } from './models/user-with-includes';

export const transferObjectToUserCreate = (user: UserDTO): UserCreateInput => ({
  id: user.id,
  name: user.name,
  phone: user.phone,
  website: user.website,
  email: user.email,
  Company: {
    create: {
      bs: user.company.bs,
      catchPhrase: user.company.catchPhrase,
      name: user.company.catchPhrase,
    }
  },
  Address: {
    create: {
      city: user.address.city,
      street: user.address.street,
      suite: user.address.suite,
      zipcode: user.address.zipcode,
      Geo: {
        create: {
          lat: user.address.geo.lat,
          lng: user.address.geo.lng,
        }
      }
    }
  },
});

export const modelToTransferObject = (userModel: UserWithIncludes): UserDTO => ({
  id: userModel.id,
  addressId: userModel.addressId,
  companyId: userModel.companyId,
  email: userModel.email,
  name: userModel.name,
  phone: userModel.phone,
  website: userModel.website,
  company: {
    id: userModel.Company.id,
    bs: userModel.Company.bs,
    catchPhrase: userModel.Company.catchPhrase,
    name: userModel.Company.name
  },
  address: {
    id: userModel.Address.id,
    city: userModel.Address.city,
    geoId: userModel.Address.geoId,
    street: userModel.Address.street,
    suite: userModel.Address.suite,
    zipcode: userModel.Address.zipcode,
    geo: {
      ...userModel.Address.Geo
    },
  }
});
