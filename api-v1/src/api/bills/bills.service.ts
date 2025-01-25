import { Injectable } from '@nestjs/common';
//
import { StringHelper as _ } from '@/shared/helpers';
import { PrismaService } from '@/shared/services';
//
import {
  BillEntity,
  CreateBillDto,
  UpdateBillDto,
  ReadBillDto,
  ReadBillsDto,
} from './utils/bill.interface';

@Injectable()
export class BillsService {
  constructor(private prisma: PrismaService) {}

  async findAll(where?: ReadBillsDto): Promise<BillEntity[]> {
    try {
      return where
        ? await this.prisma.bill.findMany({ where })
        : await this.prisma.bill.findMany();
    } catch (err) {
      console.log('🚀 ~ BillsService ~ findAll ~ err:', err);
    }
  }

  async findWhere(where: ReadBillDto): Promise<BillEntity | null> {
    try {
      return await this.prisma.bill.findUnique({ where });
    } catch (err) {
      console.log('🚀 ~ BillsService ~ findWhere ~ err:', err);
    }
  }

  async findById(id: number): Promise<BillEntity | null> {
    try {
      return await this.findWhere({ id });
    } catch (err) {
      console.log('🚀 ~ BillsService ~ findById ~ err:', err);
    }
  }

  async create(data: CreateBillDto): Promise<BillEntity | null> {
    try {
      return await this.prisma.bill.create({ data });
    } catch (err) {
      console.log('🚀 ~ BillsService ~ create ~ err:', err);
    }
  }

  async update(
    id: number,
    data: UpdateBillDto,
  ): Promise<BillEntity | null> {
    try {
      return await this.prisma.bill.update({ where: { id }, data });
    } catch (err) {
      console.log('🚀 ~ BillsService ~ update ~ err:', err);
    }
  }

  async remove(id: number): Promise<BillEntity | null> {
    try {
      return await this.prisma.bill.delete({ where: { id } });
    } catch (err) {
      console.log('🚀 ~ BillsService ~ remove ~ err:', err);
    }
  }
}
