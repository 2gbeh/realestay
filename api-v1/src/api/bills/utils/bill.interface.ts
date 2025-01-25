import { Prisma, Bill } from '@prisma/client';

export interface BillEntity extends Bill {}

export type CreateBillDto = Prisma.BillCreateInput;

export type UpdateBillDto = Prisma.BillUpdateInput;

export type ReadBillDto = Prisma.BillWhereUniqueInput;

export type ReadBillsDto = Prisma.BillWhereInput;
