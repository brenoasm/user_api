import { UserCreateInput } from '@prisma/client';
import { UserDTO } from 'src/shared/dtos/user.dto';
import { UserWithIncludes } from './models/user-with-includes';
import { modelToTransferObject, transferObjectToUserCreate } from './user.mapper';

describe('userMapper', () => {
  const userCreateInputMock = <UserCreateInput>{
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    Address: {
      create: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        Geo: {
          create: {
            lat: "-37.3159",
            lng: "81.1496"
          }
        }
      }
    },
    Company: {
      create: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
      }
    },
    Contact: {
      create: {
        email: "Sincere@april.biz",
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
      }
    },
  };

  const userModelMock = <UserWithIncludes>{
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    addressId: 1,
    companyId: 1,
    contactId: 1,
    Address: {
      id: 1,
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geoId: 1,
      Geo: {
        id: 1,
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    Company: {
      id: 1,
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    },
    Contact: {
      id: 1,
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    },
  };

  const userDTOAlreadyCreatedMock = <UserDTO>{
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    addressId: 1,
    companyId: 1,
    contactId: 1,
    address: {
      id: 1,
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geoId: 1,
      geo: {
        id: 1,
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    company: {
      id: 1,
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    },
    contact: {
      id: 1,
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    },
  };

  const userDTONotYetCreatedMock = <UserDTO>{
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    },
    contact: {
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    },
  };

  it('should return a transferObject', () => {
    const userDTO = modelToTransferObject(userModelMock);

    expect(userDTO).toMatchObject(userDTOAlreadyCreatedMock);
  });

  it('should return a userCreateInput', () => {
    const userCreateInput = transferObjectToUserCreate(userDTONotYetCreatedMock);

    expect(userCreateInput).toMatchObject(userCreateInputMock);
  });
});
