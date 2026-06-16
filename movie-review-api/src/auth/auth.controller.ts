import {
  Controller,
  Get,
  Req,
} from '@nestjs/common';

import { CurrentUser }
from '../common/decorators/current-user.decorator';

@Controller('auth')
export class AuthController {

  @Get('profile')
  getProfile(
    @CurrentUser() user: any,
  ) {
    return user;
  }
}