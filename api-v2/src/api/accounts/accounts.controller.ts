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
  AccountEntity,
  CreateAccountDto,
  UpdateAccountDto,
  ReadAccountDto,
  ReadAccountsDto,
} from './utils/account.interface';
import { AccountsService } from './accounts.service';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Get()
  async findAll(@Query() query?: ReadAccountsDto) {
    try {
      return await this.accountsService.findAll(query);
    } catch (err) {
      console.log('🚀 ~ AccountsController ~ findAll ~ err:', err);
    }
  }

  @Post()
  async create(@Body() body: CreateAccountDto) {
    try {
      const { id, createdAt } = await this.accountsService.create(body);
      return { id, createdAt };
    } catch (err) {
      console.log('🚀 ~ AccountsController ~ create ~ err:', err);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.accountsService.findById(+id);
    } catch (err) {
      console.log('🚀 ~ AccountsController ~ findOne ~ err:', err);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: UpdateAccountDto) {
    try {
      const { updatedAt } = await this.accountsService.update(+id, body);
      return { updatedAt };
    } catch (err) {
      console.log('🚀 ~ AccountsController ~ update ~ err:', err);
    }
  }

  @Put(':identifier')
  async save(@Param('identifier') name: string, @Body() body: CreateAccountDto) {
    try {
      const { id, updatedAt } = await this.accountsService.save({ name }, body);
      return { id, updatedAt };
    } catch (err) {
      console.log('🚀 ~ AccountsController ~ save ~ err:', err);
    }
  }

  @Delete('restore/:id')
  async restore(@Param('id') id: string) {
    try {
      const { updatedAt } = await this.accountsService.update(+id, {
        deletedAt: null,
      });
      return { updatedAt };
    } catch (err) {
      console.log('🚀 ~ AccountsController ~ restore ~ err:', err);
    }
  }

  @Delete('trash/:id')
  async trash(@Param('id') id: string) {
    try {
      const { deletedAt } = await this.accountsService.update(+id, {
        deletedAt: _.getDateTime(),
      });
      return { deletedAt };
    } catch (err) {
      console.log('🚀 ~ AccountsController ~ trash ~ err:', err);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.accountsService.remove(+id);
    } catch (err) {
      console.log('🚀 ~ AccountsController ~ remove ~ err:', err);
    }
  }
}
