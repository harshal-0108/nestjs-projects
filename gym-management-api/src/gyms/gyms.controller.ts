import {
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';

import { GymsService }
from './gyms.service';

@Controller('gyms')
export class GymsController {

  constructor(
    private readonly gymsService:
      GymsService,
  ) {}

  @Post()
  create(
    @Body() body: any,
  ) {
    return this.gymsService.create(
      body,
    );
  }

  @Get()
  findAll() {
    return this.gymsService.findAll();
  }
}