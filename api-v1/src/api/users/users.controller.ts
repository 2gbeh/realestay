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
  UserEntity,
  CreateUserDto,
  UpdateUserDto,
  ReadUserDto,
  ReadUsersDto,
} from './utils/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(@Query() query?: ReadUsersDto) {
    try {
      return await this.usersService.findAll(query);
    } catch (err) {
      console.log('🚀 ~ UsersController ~ findAll ~ err:', err);
    }
  }

  @Post()
  async create(@Body() body: CreateUserDto) {
    try {
      const { id, createdAt } = await this.usersService.create(body);
      return { id, createdAt };
    } catch (err) {
      console.log('🚀 ~ UsersController ~ create ~ err:', err);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.usersService.findById(id);
    } catch (err) {
      console.log('🚀 ~ UsersController ~ findOne ~ err:', err);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: UpdateUserDto) {
    try {
      const { updatedAt } = await this.usersService.update(id, body);
      return { updatedAt };
    } catch (err) {
      console.log('🚀 ~ UsersController ~ update ~ err:', err);
    }
  }

  @Put(':identifier')
  async save(
    @Param('identifier') username: string,
    @Body() body: CreateUserDto,
  ) {
    try {
      const { id, updatedAt } = await this.usersService.save(
        { username },
        body,
      );
      return { id, updatedAt };
    } catch (err) {
      console.log('🚀 ~ UsersController ~ save ~ err:', err);
    }
  }

  @Delete('restore/:id')
  async restore(@Param('id') id: string) {
    try {
      const { updatedAt } = await this.usersService.update(id, {
        deletedAt: null,
      });
      return { updatedAt };
    } catch (err) {
      console.log('🚀 ~ UsersController ~ restore ~ err:', err);
    }
  }

  @Delete('trash/:id')
  async trash(@Param('id') id: string) {
    try {
      const { deletedAt } = await this.usersService.update(id, {
        deletedAt: _.getDateTime(),
      });
      return { deletedAt };
    } catch (err) {
      console.log('🚀 ~ UsersController ~ trash ~ err:', err);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.usersService.remove(id);
    } catch (err) {
      console.log('🚀 ~ UsersController ~ remove ~ err:', err);
    }
  }
}
