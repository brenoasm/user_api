import { User as UserTO } from '../../shared/types/user';
import { UserCreateInput } from '@prisma/client';

export const transferObjectToUserCreate = (user: UserTO): UserCreateInput => ({
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

// export const modelToTransferObject = () => ({});
