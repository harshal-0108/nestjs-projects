import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {

  constructor(
    private readonly usersService: UsersService,
  ) {}

  @Get()
  getUsers() {
    return this.usersService.findAll();
  }

  @Get(':id')
  getUser(
    @Param('id') id: string,
  ) {
    return this.usersService.findOne(
      Number(id),
    );
  }

  @Post()
  createUser(
    @Body() createUserDto: CreateUserDto,
  ) {
    return this.usersService.create(
      createUserDto,
    );
  }

  @Put(':id')
  updateUser(
    @Param('id') id: string,
    @Body() body: CreateUserDto,
  ) {
    return this.usersService.update(
      Number(id),
      body,
    );
  }

  @Delete(':id')
  deleteUser(
    @Param('id') id: string,
  ) {
    return this.usersService.remove(
      Number(id),
    );
  }
}