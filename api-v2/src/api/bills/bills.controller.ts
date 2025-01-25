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
  BillEntity,
  CreateBillDto,
  UpdateBillDto,
  ReadBillDto,
  ReadBillsDto,
} from './utils/bill.interface';
import { BillsService } from './bills.service';

@Controller('bills')
export class BillsController {
  constructor(private readonly billsService: BillsService) {}

  @Get()
  async findAll(@Query() query?: ReadBillsDto) {
    try {
      return await this.billsService.findAll(query);
    } catch (err) {
      console.log('🚀 ~ BillsController ~ findAll ~ err:', err);
    }
  }

  @Post()
  async create(@Body() body: CreateBillDto) {
    try {
      const { id, createdAt } = await this.billsService.create(body);
      return { id, createdAt };
    } catch (err) {
      console.log('🚀 ~ BillsController ~ create ~ err:', err);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.billsService.findById(+id);
    } catch (err) {
      console.log('🚀 ~ BillsController ~ findOne ~ err:', err);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: UpdateBillDto) {
    try {
      const { updatedAt } = await this.billsService.update(+id, body);
      return { updatedAt };
    } catch (err) {
      console.log('🚀 ~ BillsController ~ update ~ err:', err);
    }
  }

  @Delete('restore/:id')
  async restore(@Param('id') id: string) {
    try {
      const { updatedAt } = await this.billsService.update(+id, {
        deletedAt: null,
      });
      return { updatedAt };
    } catch (err) {
      console.log('🚀 ~ BillsController ~ restore ~ err:', err);
    }
  }

  @Delete('trash/:id')
  async trash(@Param('id') id: string) {
    try {
      const { deletedAt } = await this.billsService.update(+id, {
        deletedAt: _.getDateTime(),
      });
      return { deletedAt };
    } catch (err) {
      console.log('🚀 ~ BillsController ~ trash ~ err:', err);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.billsService.remove(+id);
    } catch (err) {
      console.log('🚀 ~ BillsController ~ remove ~ err:', err);
    }
  }
}
