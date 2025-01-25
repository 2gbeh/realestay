import { Prisma, Account } from '@prisma/client';

export interface AccountEntity extends Account {}

export type CreateAccountDto = Prisma.AccountCreateInput;

export type UpdateAccountDto = Prisma.AccountUpdateInput;

export type ReadAccountDto = Prisma.AccountWhereUniqueInput;

export type ReadAccountsDto = Prisma.AccountWhereInput;
