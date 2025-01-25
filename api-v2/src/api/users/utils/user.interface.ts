import { Prisma, User } from '@prisma/client';

export interface UserEntity extends User {}

export type CreateUserDto = Prisma.UserCreateInput;

export type UpdateUserDto = Prisma.UserUpdateInput;

export type ReadUserDto = Prisma.UserWhereUniqueInput;

export type ReadUsersDto = Prisma.UserWhereInput;
