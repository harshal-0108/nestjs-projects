import {
  Body,
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Query,
} from '@nestjs/common';

import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';

@Controller('employees')
export class EmployeesController {
  constructor(
    private readonly employeesService: EmployeesService,
  ) {}

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeesService.create(createEmployeeDto);
  }

  @Get()
findAll(
  @Query('page') page = 1,
  @Query('limit') limit = 10,
) {
  return this.employeesService.findAll(
    Number(page),
    Number(limit),
  );
}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeesService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() body: any,
  ) {
    return this.employeesService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeesService.remove(id);
  }
}