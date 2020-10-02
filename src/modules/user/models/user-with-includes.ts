import { UserGetPayload } from '@prisma/client'

export type UserWithIncludes = UserGetPayload<{
  include: {
    Company: true,
    Contact: true,
    Address: {
      include: {
        Geo: true
      }
    }
  }
}>

