import { Prisma, Category } from '@prisma/client';

export interface CategoryEntity extends Category {}

export type CreateCategoryDto = Prisma.CategoryCreateInput;

export type UpdateCategoryDto = Prisma.CategoryUpdateInput;

export type ReadCategoryDto = Prisma.CategoryWhereUniqueInput;

export type ReadCategoriesDto = Prisma.CategoryWhereInput;
