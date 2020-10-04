import { Injectable } from '@nestjs/common';
import {
  UserUpdateInput,
  User,
  UserCreateInput,
  UserWhereUniqueInput,
  UserWhereInput,
  UserOrderByInput,
} from '@prisma/client';

import { PrismaService } from '../../../../shared/prisma/prisma.service';

import { UserWithIncludes } from '../../models/user-with-includes';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  async user(userWhereUniqueInput: UserWhereUniqueInput): Promise<UserWithIncludes | null> {
    return this.prisma.user.findOne({
      where: userWhereUniqueInput,
      include: {
        Contact: true,
        Address: { include: { Geo: true } },
        Company: true,
      },
    });
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: UserWhereUniqueInput;
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createUser(data: UserCreateInput): Promise<UserWithIncludes> {
    return this.prisma.user.create({
      data,
      include: {
        Contact: true,
        Address: { include: { Geo: true } },
        Company: true,
      },
    });
  }

  async updateUser(params: {
    where: UserWhereUniqueInput;
    data: UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async deleteUser(where: UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
}
