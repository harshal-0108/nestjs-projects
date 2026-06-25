import {
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';

import { MembershipsService }
from './memberships.service';

@Controller('memberships')
export class MembershipsController {

  constructor(
    private readonly membershipsService:
      MembershipsService,
  ) {}

  @Post()
  create(
    @Body() body: any,
  ) {
    return this.membershipsService.create(
      body,
    );
  }

  @Get()
  findAll() {
    return this.membershipsService.findAll();
  }
}