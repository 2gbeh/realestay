import { Injectable } from '@nestjs/common';
//
import { StringHelper as _ } from '@/shared/helpers';
import { PrismaService } from '@/shared/services';
//
import {
  AccountEntity,
  CreateAccountDto,
  UpdateAccountDto,
  ReadAccountDto,
  ReadAccountsDto,
} from './utils/account.interface';

@Injectable()
export class AccountsService {
  constructor(private prisma: PrismaService) {}

  async findAll(where?: ReadAccountsDto): Promise<AccountEntity[]> {
    try {
      return where
        ? await this.prisma.account.findMany({ where })
        : await this.prisma.account.findMany();
    } catch (err) {
      console.log('🚀 ~ AccountsService ~ findAll ~ err:', err);
    }
  }

  async findWhere(where: ReadAccountDto): Promise<AccountEntity | null> {
    try {
      return await this.prisma.account.findUnique({ where });
    } catch (err) {
      console.log('🚀 ~ AccountsService ~ findWhere ~ err:', err);
    }
  }

  async findById(id: number): Promise<AccountEntity | null> {
    try {
      return await this.findWhere({ id });
    } catch (err) {
      console.log('🚀 ~ AccountsService ~ findById ~ err:', err);
    }
  }

  async create(data: CreateAccountDto): Promise<AccountEntity | null> {
    try {
      return await this.prisma.account.create({ data });
    } catch (err) {
      console.log('🚀 ~ AccountsService ~ create ~ err:', err);
    }
  }

  async update(
    id: number,
    data: UpdateAccountDto,
  ): Promise<AccountEntity | null> {
    try {
      return await this.prisma.account.update({ where: { id }, data });
    } catch (err) {
      console.log('🚀 ~ AccountsService ~ update ~ err:', err);
    }
  }

  async save(
    where: ReadAccountDto,
    create: CreateAccountDto,
  ): Promise<AccountEntity | null> {
    try {
      return await this.prisma.account.upsert({ where, create, update: {} });
    } catch (err) {
      console.log('🚀 ~ AccountsService ~ save ~ err:', err);
    }
  }

  async remove(id: number): Promise<AccountEntity | null> {
    try {
      return await this.prisma.account.delete({ where: { id } });
    } catch (err) {
      console.log('🚀 ~ AccountsService ~ remove ~ err:', err);
    }
  }
}
