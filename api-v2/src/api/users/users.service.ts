import { Injectable } from '@nestjs/common';
//
import { StringHelper as _ } from '@/shared/helpers';
import { PrismaService } from '@/shared/services';
//
import {
  UserEntity,
  CreateUserDto,
  UpdateUserDto,
  ReadUserDto,
  ReadUsersDto,
} from './utils/user.interface';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll(where?: ReadUsersDto): Promise<UserEntity[]> {
    try {
      return where
        ? await this.prisma.user.findMany({ where })
        : await this.prisma.user.findMany();
    } catch (err) {
      console.log('🚀 ~ UsersService ~ findAll ~ err:', err);
    }
  }

  async findWhere(where: ReadUserDto): Promise<UserEntity | null> {
    try {
      return await this.prisma.user.findUnique({ where });
    } catch (err) {
      console.log('🚀 ~ UsersService ~ findWhere ~ err:', err);
    }
  }

  async findById(id: string): Promise<UserEntity | null> {
    try {
      return await this.findWhere({ id });
    } catch (err) {
      console.log('🚀 ~ UsersService ~ findById ~ err:', err);
    }
  }

  async findByIdentifier(identifier: string): Promise<UserEntity | null> {
    try {
      return _.isEmail(identifier)
        ? await this.findWhere({ email: identifier })
        : await this.findWhere({ username: identifier });
    } catch (err) {
      console.log('🚀 ~ UsersService ~ findByIdentifier ~ err:', err);
    }
  }

  async create(data: CreateUserDto): Promise<UserEntity | null> {
    try {
      return await this.prisma.user.create({ data });
    } catch (err) {
      console.log('🚀 ~ UsersService ~ create ~ err:', err);
    }
  }

  async update(id: string, data: UpdateUserDto): Promise<UserEntity | null> {
    try {
      return await this.prisma.user.update({ where: { id }, data });
    } catch (err) {
      console.log('🚀 ~ UsersService ~ update ~ err:', err);
    }
  }

  async save(
    where: ReadUserDto,
    create: CreateUserDto,
  ): Promise<UserEntity | null> {
    try {
      return await this.prisma.user.upsert({ where, create, update: {} });
    } catch (err) {
      console.log('🚀 ~ UsersService ~ save ~ err:', err);
    }
  }

  async remove(id: string): Promise<UserEntity | null> {
    try {
      return await this.prisma.user.delete({ where: { id } });
    } catch (err) {
      console.log('🚀 ~ UsersService ~ remove ~ err:', err);
    }
  }
}
