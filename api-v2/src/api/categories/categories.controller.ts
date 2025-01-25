import {
  Controller,
  Get,
  Post,
  Patch,
  Put,
  Delete,
  Param,
  Query,
  Body,
} from '@nestjs/common';
//
import { StringHelper as _ } from '@/shared/helpers';
//
import {
  CategoryEntity,
  CreateCategoryDto,
  UpdateCategoryDto,
  ReadCategoryDto,
  ReadCategoriesDto,
} from './utils/category.interface';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async findAll(@Query() query?: ReadCategoriesDto) {
    try {
      return await this.categoriesService.findAll(query);
    } catch (err) {
      console.log('🚀 ~ CategoriesController ~ findAll ~ err:', err);
    }
  }

  @Post()
  async create(@Body() body: CreateCategoryDto) {
    try {
      return await this.categoriesService.create(body);
    } catch (err) {
      console.log('🚀 ~ CategoriesController ~ create ~ err:', err);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.categoriesService.findById(+id);
    } catch (err) {
      console.log('🚀 ~ CategoriesController ~ findOne ~ err:', err);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: UpdateCategoryDto) {
    try {
      return await this.categoriesService.update(+id, body);
    } catch (err) {
      console.log('🚀 ~ CategoriesController ~ update ~ err:', err);
    }
  }

  @Put(':identifier')
  async save(
    @Param('identifier') name: string,
    @Body() body: CreateCategoryDto,
  ) {
    try {
      return await this.categoriesService.save({ name }, body);
    } catch (err) {
      console.log('🚀 ~ CategoriesController ~ save ~ err:', err);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.categoriesService.remove(+id);
    } catch (err) {
      console.log('🚀 ~ CategoriesController ~ remove ~ err:', err);
    }
  }
}
