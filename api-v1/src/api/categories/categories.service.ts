import { Injectable } from '@nestjs/common';
//
import { StringHelper as _ } from '@/shared/helpers';
import { PrismaService } from '@/shared/services';
//
import {
  CategoryEntity,
  CreateCategoryDto,
  UpdateCategoryDto,
  ReadCategoryDto,
  ReadCategoriesDto,
} from './utils/category.interface';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async findAll(where?: ReadCategoriesDto): Promise<CategoryEntity[]> {
    try {
      return where
        ? await this.prisma.category.findMany({ where })
        : await this.prisma.category.findMany();
    } catch (err) {
      console.log('🚀 ~ CategoriesService ~ findAll ~ err:', err);
    }
  }

  async findWhere(where: ReadCategoryDto): Promise<CategoryEntity | null> {
    try {
      return await this.prisma.category.findUnique({ where });
    } catch (err) {
      console.log('🚀 ~ CategoriesService ~ findWhere ~ err:', err);
    }
  }

  async findById(id: number): Promise<CategoryEntity | null> {
    try {
      return await this.findWhere({ id });
    } catch (err) {
      console.log('🚀 ~ CategoriesService ~ findById ~ err:', err);
    }
  }

  async create(data: CreateCategoryDto): Promise<CategoryEntity | null> {
    try {
      return await this.prisma.category.create({ data });
    } catch (err) {
      console.log('🚀 ~ CategoriesService ~ create ~ err:', err);
    }
  }

  async update(
    id: number,
    data: UpdateCategoryDto,
  ): Promise<CategoryEntity | null> {
    try {
      return await this.prisma.category.update({ where: { id }, data });
    } catch (err) {
      console.log('🚀 ~ CategoriesService ~ update ~ err:', err);
    }
  }

  async save(
    where: ReadCategoryDto,
    create: CreateCategoryDto,
  ): Promise<CategoryEntity | null> {
    try {
      return await this.prisma.category.upsert({ where, create, update: {} });
    } catch (err) {
      console.log('🚀 ~ CategoriesService ~ save ~ err:', err);
    }
  }

  async remove(id: number): Promise<CategoryEntity | null> {
    try {
      return await this.prisma.category.delete({ where: { id } });
    } catch (err) {
      console.log('🚀 ~ CategoriesService ~ remove ~ err:', err);
    }
  }
}
