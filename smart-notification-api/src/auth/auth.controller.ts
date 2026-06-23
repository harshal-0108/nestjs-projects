import {
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';

import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
  ) {}

  @Post('register')
  register(
    @Body() body: any,
  ) {
    return this.authService.register(
      body,
    );
  }

  @Get('users')
  getUsers() {
    return this.authService.getUsers();
  }


  @Post('login')
  login(
    @Body() body: any,
  ) {
    return this.authService.login(
      body.username,
    );
  }
}