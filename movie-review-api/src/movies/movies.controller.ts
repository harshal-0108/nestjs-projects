import {
  Controller,
  Delete,
  Param,
  UseGuards,
} from '@nestjs/common';

import { Roles }
from '../common/decorators/roles.decorator';

import { FakeAuthGuard }
from '../common/guards/fake-auth.guard';

import { RolesGuard }
from '../common/guards/roles.guard';

@Controller('movies')
export class MoviesController {

  @Delete(':id')

  @UseGuards(
    FakeAuthGuard,
    RolesGuard,
  )

  @Roles('admin')

  deleteMovie(
    @Param('id') id: string,
  ) {
    return {
      message:
        `Movie ${id} deleted`,
    };
  }
}